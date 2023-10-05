use askama_axum::IntoResponse;

use crate::templates::common::IndexTemplate;

pub mod clients;
pub mod schemas;

pub async fn index() -> impl IntoResponse {
    IndexTemplate {}
}
