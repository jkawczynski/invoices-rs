use askama::Template;

use crate::models::Client;

use super::common::{AppResponse, AppTemplate, ErrorTemplate, SuccessTemplate};

#[derive(Template)]
#[template(path = "clients/views/list.html")]
pub struct ClientsListTemplate {
    pub clients: Option<Vec<Client>>,
    pub error: Option<String>,
}

impl AppResponse<Vec<Client>> for ClientsListTemplate {}

impl ErrorTemplate for ClientsListTemplate {
    fn from_error(error: String) -> Self {
        ClientsListTemplate {
            clients: None,
            error: Some(error),
        }
    }
}

impl AppTemplate<Vec<Client>> for ClientsListTemplate {
    fn new(context: Vec<Client>) -> Self {
        ClientsListTemplate {
            clients: Some(context),
            error: None,
        }
    }
}

#[derive(Template)]
#[template(path = "clients/views/edit.html")]
pub struct ClientEditTemplate {
    pub client: Client,
    pub error: Option<String>,
    pub message: Option<String>,
}

impl AppResponse<Client> for ClientEditTemplate {}

impl ErrorTemplate for ClientEditTemplate {
    fn from_error(error: String) -> Self {
        ClientEditTemplate {
            client: Client::default(),
            error: Some(error),
            message: None,
        }
    }
}

impl AppTemplate<Client> for ClientEditTemplate {
    fn new(context: Client) -> Self {
        ClientEditTemplate {
            client: context,
            error: None,
            message: None,
        }
    }
}

impl SuccessTemplate for ClientEditTemplate {
    fn with_success_msg(&mut self, msg: String) {
        self.message = Some(msg);
    }
}
