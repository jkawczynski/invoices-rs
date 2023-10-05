use sqlx::{sqlite::SqliteQueryResult, Pool, Sqlite};

use crate::{controllers::schemas::CreateClientSchema, models::Client};

pub async fn get_clients(db_pool: &Pool<Sqlite>) -> Result<Vec<Client>, sqlx::Error> {
    sqlx::query_as!(Client, "SELECT * FROM clients ORDER BY id")
        .fetch_all(db_pool)
        .await
}
pub async fn get_client_by_uuid(
    db_pool: &Pool<Sqlite>,
    client_id: uuid::Uuid,
) -> Result<Client, sqlx::Error> {
    let id = client_id.to_string();
    sqlx::query_as!(Client, "SELECT * FROM clients WHERE id = ?", id)
        .fetch_one(db_pool)
        .await
}

pub async fn delete_client_by_uuid(
    db_pool: &Pool<Sqlite>,
    client_id: uuid::Uuid,
) -> Result<SqliteQueryResult, sqlx::Error> {
    let sql = "DELETE FROM clients WHERE id = ?";
    sqlx::query(&sql)
        .bind(client_id.to_string())
        .execute(db_pool)
        .await
}

pub async fn edit_client_by_uuid(
    db_pool: &Pool<Sqlite>,
    client_id: uuid::Uuid,
    client: CreateClientSchema,
) -> Result<SqliteQueryResult, sqlx::Error> {
    let sql = "UPDATE clients SET
    company_name = ?, addr_line_1 = ?, addr_line_2 = ?, vat_number = ?, country = ?
    WHERE id = ?";

    sqlx::query(&sql)
        .bind(client.company_name)
        .bind(client.addr_line_1)
        .bind(client.addr_line_2)
        .bind(client.vat_number)
        .bind(client.country)
        .bind(client_id.clone().to_string())
        .execute(db_pool)
        .await
}

pub async fn create_client(
    db_pool: &Pool<Sqlite>,
    client_id: uuid::Uuid,
    client: CreateClientSchema,
) -> Result<SqliteQueryResult, sqlx::Error> {
    let sql = "INSERT INTO clients 
    (id, company_name, addr_line_1, addr_line_2, vat_number, country)
    VALUES (?, ?, ?, ?, ?, ?)";

    sqlx::query(&sql)
        .bind(client_id.clone().to_string())
        .bind(client.company_name)
        .bind(client.addr_line_1)
        .bind(client.addr_line_2)
        .bind(client.vat_number)
        .bind(client.country)
        .execute(db_pool)
        .await
}
