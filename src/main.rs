use database::prepare_database;
use error::{AppError, Result};
use routes::app_router;
use std::net::SocketAddr;

use sqlx::{Pool, Sqlite};

mod controllers;
mod database;
mod error;
mod models;
mod routes;
mod services;
mod templates;

#[macro_use]
extern crate lazy_static;

#[derive(Clone)]
pub struct AppState {
    db_pool: Pool<Sqlite>,
}

#[tokio::main]
async fn main() -> Result<(), AppError> {
    let db_pool = prepare_database().await?;
    let app_state = AppState { db_pool };
    let app = app_router().with_state(app_state);

    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();

    Ok(())
}
