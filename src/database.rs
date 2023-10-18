use crate::error::Result;

use anyhow::Context;
use sqlx::Connection;
use sqlx::{
    sqlite::{SqliteConnectOptions, SqliteJournalMode, SqlitePoolOptions},
    ConnectOptions, Pool, Sqlite,
};

use std::env;
use std::str::FromStr;

lazy_static! {
    pub static ref DATABASE_URL: String =
        env::var("DATABASE_URL").unwrap_or("database.sqlite".to_string());
}

pub async fn prepare_database() -> Result<Pool<Sqlite>> {
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

    Ok(pool)
}
