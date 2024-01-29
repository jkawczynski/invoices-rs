use std::{collections::HashMap, fmt::Display};

use askama_axum::{IntoResponse, Response};
use axum::{extract::rejection::FormRejection, http::StatusCode};
use thiserror::Error;

use crate::{models::Client, templates::clients::ClientCreateTemplate};

pub type Result<T, E = AppError> = core::result::Result<T, E>;

#[derive(Error, Debug)]
pub enum AppError {
    #[error("Resource not Found")]
    NotFound,

    #[error("Database Error")]
    DatabaseError(#[from] sqlx::Error),

    #[error(transparent)]
    ValidationError(#[from] AppFormValidationError),

    #[error(transparent)]
    Other(#[from] anyhow::Error),
}

#[derive(Error, Debug)]
pub enum AppFormValidationError {
    #[error(transparent)]
    ClientForm(#[from] ClientFormError),

    #[error(transparent)]
    AxumFormRejection(#[from] FormRejection),
}

#[derive(Error, Debug)]
pub struct ClientFormError {
    pub input_form: Client,
    pub errors: HashMap<String, String>,
}

impl Display for ClientFormError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}", "Form Validation Error")
    }
}

impl IntoResponse for AppError {
    fn into_response(self) -> Response {
        match self {
            _ => (
                StatusCode::INTERNAL_SERVER_ERROR,
                format!("Something went wrong: {}", "eh"),
            ),
        }
        .into_response()
    }
}

impl IntoResponse for AppFormValidationError {
    fn into_response(self) -> Response {
        match self {
            AppFormValidationError::ClientForm(err) => {
                let mut template = ClientCreateTemplate::default();
                template.client = err.input_form;
                template.errors = err.errors;
                return (StatusCode::BAD_REQUEST, template).into_response();
            }
            _ => (
                StatusCode::INTERNAL_SERVER_ERROR,
                format!("Something went wrong: {}", "eh"),
            ),
        }
        .into_response()
    }
}
