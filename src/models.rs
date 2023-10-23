use serde::{Deserialize, Serialize};
use validator::Validate;

#[derive(sqlx::FromRow, Deserialize, Serialize, Debug, Validate)]
pub struct Client {
    pub id: Option<String>,

    #[validate(length(min = 3, message = "Company name must be minimum 3 chars"))]
    pub company_name: String,
    pub addr_line_1: String,
    pub addr_line_2: String,
    pub vat_number: String,

    #[validate(length(max = 2, message = "Use country code expressed as UK, PL, US etc."))]
    pub country: String,
}

impl Default for Client {
    fn default() -> Self {
        Client {
            id: None,
            company_name: String::from(""),
            addr_line_1: String::from(""),
            addr_line_2: String::from(""),
            vat_number: String::from(""),
            country: String::from(""),
        }
    }
}
