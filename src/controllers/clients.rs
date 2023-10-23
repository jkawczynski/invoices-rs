use std::collections::HashMap;

use askama_axum::{IntoResponse, Response};
use axum::{
    async_trait,
    extract::{rejection::FormRejection, FromRequest, Path, State},
    http::Request,
    Form,
};
use validator::Validate;

use crate::{
    error::{AppError, AppFormValidationError, ClientFormError},
    models::Client,
    services::clients::{
        create_client, delete_client_by_uuid, edit_client_by_uuid, get_client_by_uuid, get_clients,
    },
    templates::{
        clients::{ClientCreateTemplate, ClientEditTemplate, ClientsListTemplate},
        common::{AppTemplate, MessageContext, SuccessTemplate},
    },
    AppState,
};

#[derive(Debug, Clone, Copy, Default)]
pub struct ValidatedForm<T>(pub T);

#[async_trait]
impl<S, B> FromRequest<S, B> for ValidatedForm<Client>
where
    S: Send + Sync,
    Form<Client>: FromRequest<S, B, Rejection = FormRejection>,
    B: Send + 'static,
{
    type Rejection = AppFormValidationError;

    async fn from_request(req: Request<B>, state: &S) -> Result<Self, Self::Rejection> {
        let Form(value) = Form::<Client>::from_request(req, state).await?;
        match value.validate() {
            Ok(_) => Ok(ValidatedForm(value)),
            Err(err) => {
                let mut form_errors: HashMap<String, String> = HashMap::new();
                for (field, errors) in err.field_errors().into_iter() {
                    let ers: Vec<String> = errors
                        .iter()
                        .map(|err| err.message.as_ref().unwrap().to_string())
                        .collect();
                    let error_message: String = ers.join(", ");
                    form_errors.insert(field.to_string(), error_message);
                }
                return Err(AppFormValidationError::ClientForm(ClientFormError {
                    input_form: value,
                    errors: form_errors,
                }));
            }
        }
    }
}

fn with_redirect(mut response: Response, redirect_path: &str) -> Response {
    let headers = response.headers_mut();
    headers.insert("HX-Push-Url", redirect_path.parse().unwrap());
    return response;
}

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
    Form(body): Form<Client>,
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
    return Ok(with_redirect(template.into_response(), "/clients"));
}

pub async fn get_create_client() -> impl IntoResponse {
    ClientCreateTemplate::default()
}

pub async fn post_create_client(
    State(state): State<AppState>,
    ValidatedForm(body): ValidatedForm<Client>,
) -> anyhow::Result<impl IntoResponse, AppError> {
    create_client(&state.db_pool, body).await?;

    let clients = get_clients(&state.db_pool).await?;
    let template = ClientsListTemplate {
        clients: Some(clients),
        message: Some(MessageContext {
            message: "Client was successfully created.".to_string(),
            message_sub: None,
        }),
        ..Default::default()
    };
    return Ok(with_redirect(template.into_response(), "/clients"));
}
