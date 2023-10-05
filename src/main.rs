use axum::{
    routing::{delete, get},
    Router,
};
use std::net::SocketAddr;

// sqlx
use anyhow::Context;
use sqlx::Connection;
use sqlx::{
    sqlite::{SqliteConnectOptions, SqliteJournalMode, SqlitePoolOptions},
    ConnectOptions, Pool, Sqlite,
};

use std::env;
use std::str::FromStr;

mod controllers;
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
async fn main() -> anyhow::Result<()> {
    let db_pool = prepare_database().await?;

    let app_state = AppState { db_pool };

    let app = Router::new()
        .route("/", get(controllers::index))
        .route("/clients", get(controllers::clients::get_clients_list))
        .route(
            "/clients/:client_uuid",
            get(controllers::clients::get_client).put(controllers::clients::put_client),
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
