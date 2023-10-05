use askama::Template;
use askama_axum::IntoResponse;

pub trait ErrorTemplate {
    fn from_error(error: String) -> Self;
}

pub trait AppTemplate<T> {
    fn new(context: T) -> Self;
}

pub trait SuccessTemplate {
    fn with_success_msg(&mut self, msg: String);
}

pub trait AppResponse<T>: IntoResponse + ErrorTemplate + AppTemplate<T> {}
impl<T: IntoResponse + ErrorTemplate + AppTemplate<T>> AppResponse<T> for T {}

#[derive(Template)]
#[template(path = "index.html")]
pub struct IndexTemplate {}
