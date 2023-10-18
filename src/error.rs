use askama_axum::{IntoResponse, Response};
use axum::http::StatusCode;
use thiserror::Error;

pub type Result<T, E = AppError> = core::result::Result<T, E>;

#[derive(Error, Debug)]
pub enum AppError {
    #[error("Resource not Found")]
    NotFound,

    #[error("Database Error")]
    DatabaseError(#[from] sqlx::Error),

    #[error(transparent)]
    Other(#[from] anyhow::Error),
}

impl IntoResponse for AppError {
    fn into_response(self) -> Response {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Something went wrong: {}", "eh"),
        )
            .into_response()
    }
}
