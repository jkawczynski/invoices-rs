use axum::{
    extract::{Path, State},
    Json,
};

use crate::{
    models::Client,
    services::clients::{edit_client_by_uuid, get_client_by_uuid, get_clients},
    templates::{
        clients::{ClientEditTemplate, ClientsListTemplate},
        common::{AppResponse, AppTemplate, ErrorTemplate, IndexTemplate, SuccessTemplate},
    },
    AppState,
};

use super::schemas::CreateClientSchema;

pub async fn get_clients_list(State(state): State<AppState>) -> impl AppResponse<Vec<Client>> {
    let clients = get_clients(&state.db_pool)
        .await
        .map_err(|err| err.to_string());

    match clients {
        Err(error) => ClientsListTemplate::from_error(error),
        Ok(clients) => ClientsListTemplate::new(clients),
    }
}

pub async fn get_client(
    State(state): State<AppState>,
    Path(client_uuid): Path<String>,
) -> impl AppResponse<Client> {
    let client_uuid = uuid::Uuid::parse_str(&client_uuid).unwrap();
    let client = get_client_by_uuid(&state.db_pool, client_uuid)
        .await
        .map_err(|err| err.to_string());

    match client {
        Err(err) => ClientEditTemplate::from_error(err),
        Ok(client) => ClientEditTemplate::new(client),
    }
}

pub async fn put_client(
    State(state): State<AppState>,
    Path(client_id): Path<String>,
    Json(body): Json<CreateClientSchema>,
) -> impl AppResponse<Client> + SuccessTemplate {
    let client_uuid = uuid::Uuid::parse_str(&client_id).unwrap();
    let result = edit_client_by_uuid(&state.db_pool, client_uuid, body)
        .await
        .map_err(|err| err.to_string());

    let client = match get_client_by_uuid(&state.db_pool, client_uuid)
        .await
        .map_err(|err| err.to_string())
    {
        Err(err) => {
            return ClientEditTemplate::from_error(err);
        }
        Ok(client) => client,
    };

    match result {
        Err(err) => {
            return ClientEditTemplate::from_error(err);
        }
        Ok(_) => {
            let mut template = ClientEditTemplate::new(client);
            template.with_success_msg("Client was successfully edited.".to_string());
            return template;
        }
    }
}
