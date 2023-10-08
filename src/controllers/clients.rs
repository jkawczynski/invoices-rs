use askama_axum::IntoResponse;
use axum::{
    extract::{Path, State},
    Json,
};

use crate::{
    error::AppError,
    services::clients::{
        create_client, delete_client_by_uuid, edit_client_by_uuid, get_client_by_uuid, get_clients,
    },
    templates::{
        clients::{ClientCreateTemplate, ClientEditTemplate, ClientsListTemplate},
        common::{AppTemplate, MessageContext, SuccessTemplate},
    },
    AppState,
};

use super::schemas::CreateClientSchema;

pub async fn get_clients_list(
    State(state): State<AppState>,
) -> anyhow::Result<impl IntoResponse, AppError> {
    let clients = get_clients(&state.db_pool).await?;
    let template = ClientsListTemplate::new(clients);
    return Ok(template);
}

pub async fn get_client(
    State(state): State<AppState>,
    Path(client_uuid): Path<String>,
) -> anyhow::Result<impl IntoResponse, AppError> {
    let client_uuid = uuid::Uuid::parse_str(&client_uuid).unwrap();
    let client = get_client_by_uuid(&state.db_pool, client_uuid).await?;
    return Ok(ClientEditTemplate::new(client));
}

pub async fn put_client(
    State(state): State<AppState>,
    Path(client_id): Path<String>,
    Json(body): Json<CreateClientSchema>,
) -> anyhow::Result<impl IntoResponse, AppError> {
    let client_uuid = uuid::Uuid::parse_str(&client_id).unwrap();
    edit_client_by_uuid(&state.db_pool, client_uuid, body).await?;

    let client = get_client_by_uuid(&state.db_pool, client_uuid).await?;
    let mut template = ClientEditTemplate::new(client);
    let message = MessageContext {
        message: "Client was successfully edited.".to_string(),
        message_sub: None,
    };
    template.with_success_msg(message);
    return Ok(template);
}

pub async fn delete_client(
    State(state): State<AppState>,
    Path(client_id): Path<String>,
) -> anyhow::Result<impl IntoResponse, AppError> {
    let client_uuid = uuid::Uuid::parse_str(&client_id).unwrap();
    delete_client_by_uuid(&state.db_pool, client_uuid).await?;
    let clients = get_clients(&state.db_pool).await?;
    let template = ClientsListTemplate {
        clients: Some(clients),
        message: Some(MessageContext {
            message: format!("Client with id='{}' was successfully deleted.", client_id),
            message_sub: None,
        }),
        ..Default::default()
    };
    let mut response = template.into_response();
    let headers = response.headers_mut();
    headers.insert("HX-Push-Url", "/clients".parse().unwrap());
    return Ok(response);
}

pub async fn get_create_client() -> impl IntoResponse {
    ClientCreateTemplate::default()
}

pub async fn post_create_client(
    State(state): State<AppState>,
    Json(body): Json<CreateClientSchema>,
) -> anyhow::Result<impl IntoResponse, AppError> {
    let client_id = uuid::Uuid::new_v4();
    create_client(&state.db_pool, client_id, body).await?;

    let clients = get_clients(&state.db_pool).await?;
    let template = ClientsListTemplate {
        clients: Some(clients),
        message: Some(MessageContext {
            message: "Client was successfully created.".to_string(),
            message_sub: None,
        }),
        ..Default::default()
    };
    let mut response = template.into_response();
    let headers = response.headers_mut();
    headers.insert("HX-Push-Url", "/clients".parse().unwrap());
    return Ok(response);
}
