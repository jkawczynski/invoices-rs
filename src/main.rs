use askama_axum::{IntoResponse, Response};
use axum::body::{boxed, Body, BoxBody};
use axum::http::{Request, StatusCode, Uri};
use axum::{routing::get, Router};
use error::AppError;
use std::net::SocketAddr;
use tower_http::services::ServeDir;

// sqlx
use anyhow::Context;
use sqlx::Connection;
use sqlx::{
    sqlite::{SqliteConnectOptions, SqliteJournalMode, SqlitePoolOptions},
    ConnectOptions, Pool, Sqlite,
};

use std::env;
use std::str::FromStr;
use tower::ServiceExt;

mod controllers;
mod error;
mod models;
mod services;
mod templates;

#[macro_use]
extern crate lazy_static;

lazy_static! {
    pub static ref DATABASE_URL: String =
        env::var("DATABASE_URL").unwrap_or("database.sqlite".to_string());
}

#[derive(Clone)]
pub struct AppState {
    db_pool: Pool<Sqlite>,
}

#[tokio::main]
async fn main() -> anyhow::Result<(), AppError> {
    let db_pool = prepare_database().await?;

    let app_state = AppState { db_pool };

    let app = Router::new()
        .nest_service("/static", get(static_file_handler))
        .route("/", get(controllers::index))
        .route(
            "/clients",
            get(controllers::clients::get_clients_list)
                .post(controllers::clients::post_create_client),
        )
        .route(
            "/clients/create",
            get(controllers::clients::get_create_client),
        )
        .route(
            "/clients/:client_uuid",
            get(controllers::clients::get_client)
                .put(controllers::clients::put_client)
                .delete(controllers::clients::delete_client),
        )
        .with_state(app_state);

    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await?;

    Ok(())
}

async fn prepare_database() -> anyhow::Result<Pool<Sqlite>> {
    let conn = SqliteConnectOptions::from_str(&DATABASE_URL)?
        .journal_mode(SqliteJournalMode::Wal)
        .create_if_missing(true)
        .connect()
        .await?;
    conn.close();

    // prepare connection pool
    let pool = SqlitePoolOptions::new()
        .max_connections(50)
        .connect(&DATABASE_URL)
        .await
        .context("could not connect to database_url")?;

    // prepare schema in db if it does not yet exist
    sqlx::migrate!().run(&pool).await?;
    Ok(pool)
}

async fn static_file_handler(uri: Uri) -> Result<Response<BoxBody>, (StatusCode, String)> {
    let res = get_static_file(uri.clone()).await?;

    if res.status() == StatusCode::NOT_FOUND {
        match format!("{}", uri).parse() {
            Ok(uri_html) => get_static_file(uri_html).await,
            Err(_) => Err((StatusCode::INTERNAL_SERVER_ERROR, "Invalid URI".to_string())),
        }
    } else {
        Ok(res)
    }
}

async fn get_static_file(uri: Uri) -> Result<Response<BoxBody>, (StatusCode, String)> {
    let req = Request::builder().uri(uri).body(Body::empty()).unwrap();

    match ServeDir::new("dist").oneshot(req).await {
        Ok(res) => Ok(res.map(boxed)),
        Err(err) => Err((
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Something went wrong: {}", err),
        )),
    }
}
