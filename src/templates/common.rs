use askama::Template;
use askama_axum::IntoResponse;

pub struct MessageContext {
    pub message: String,
    pub message_sub: Option<String>,
}

pub trait ErrorTemplate {
    fn from_error(error: String) -> Self;
}

pub trait AppTemplate<T> {
    fn new(context: T) -> Self;
}

pub trait SuccessTemplate {
    fn with_success_msg(&mut self, msg: MessageContext);
}

pub trait AppResponse<T>: IntoResponse + ErrorTemplate + AppTemplate<T> {}
impl<T: IntoResponse + ErrorTemplate + AppTemplate<T>> AppResponse<T> for T {}

#[derive(Template)]
#[template(path = "index.html")]
pub struct IndexTemplate {
    pub page_title: String,
    pub message: Option<MessageContext>,
}

impl Default for IndexTemplate {
    fn default() -> Self {
        IndexTemplate {
            page_title: "Hello".to_string(),
            message: None,
        }
    }
}
