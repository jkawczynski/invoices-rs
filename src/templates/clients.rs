use std::collections::HashMap;

use askama::Template;

use crate::models::Client;

use super::common::{AppResponse, AppTemplate, ErrorTemplate, MessageContext, SuccessTemplate};

#[derive(Template)]
#[template(path = "clients/views/list.html")]
pub struct ClientsListTemplate {
    pub page_title: String,
    pub clients: Option<Vec<Client>>,
    pub error: Option<String>,
    pub message: Option<MessageContext>,
}
impl Default for ClientsListTemplate {
    fn default() -> Self {
        ClientsListTemplate {
            page_title: "Clients".to_string(),
            clients: None,
            error: None,
            message: None,
        }
    }
}

impl AppResponse<Vec<Client>> for ClientsListTemplate {}

impl ErrorTemplate for ClientsListTemplate {
    fn from_error(error: String) -> Self {
        ClientsListTemplate {
            clients: None,
            error: Some(error),
            message: None,
            ..Default::default()
        }
    }
}

impl AppTemplate<Vec<Client>> for ClientsListTemplate {
    fn new(context: Vec<Client>) -> Self {
        ClientsListTemplate {
            clients: Some(context),
            error: None,
            message: None,
            ..Default::default()
        }
    }
}

#[derive(Template)]
#[template(path = "clients/views/edit.html")]
pub struct ClientEditTemplate {
    pub page_title: String,
    pub client: Client,
    pub error: Option<String>,
    pub message: Option<MessageContext>,
    pub errors: HashMap<String, String>,
}
impl AppResponse<Client> for ClientEditTemplate {}
impl Default for ClientEditTemplate {
    fn default() -> Self {
        ClientEditTemplate {
            page_title: "Edit Client".to_string(),
            client: Client::default(),
            error: None,
            message: None,
            errors: HashMap::new(),
        }
    }
}

impl ErrorTemplate for ClientEditTemplate {
    fn from_error(error: String) -> Self {
        ClientEditTemplate {
            client: Client::default(),
            error: Some(error),
            message: None,
            ..Default::default()
        }
    }
}

impl AppTemplate<Client> for ClientEditTemplate {
    fn new(context: Client) -> Self {
        ClientEditTemplate {
            client: context,
            error: None,
            message: None,
            ..Default::default()
        }
    }
}

impl SuccessTemplate for ClientEditTemplate {
    fn with_success_msg(&mut self, msg: MessageContext) {
        self.message = Some(msg);
    }
}

#[derive(Template)]
#[template(path = "clients/views/create.html")]
pub struct ClientCreateTemplate {
    pub page_title: String,
    pub client: Client,
    pub error: Option<String>,
    pub message: Option<MessageContext>,
    pub errors: HashMap<String, String>,
}

impl ErrorTemplate for ClientCreateTemplate {
    fn from_error(error: String) -> Self {
        ClientCreateTemplate {
            error: Some(error),
            message: None,
            errors: HashMap::new(),
            ..Default::default()
        }
    }
}

impl Default for ClientCreateTemplate {
    fn default() -> Self {
        ClientCreateTemplate {
            page_title: "Create new Client".to_string(),
            error: None,
            message: None,
            client: Client::default(),
            errors: HashMap::new(),
        }
    }
}
