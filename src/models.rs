use serde::{Deserialize, Serialize};

#[derive(sqlx::FromRow, Deserialize, Serialize, Debug)]
pub struct Client {
    pub id: String,
    pub company_name: String,
    pub addr_line_1: String,
    pub addr_line_2: String,
    pub vat_number: String,
    pub country: String,
}

impl Default for Client {
    fn default() -> Self {
        Client {
            id: String::from(""),
            company_name: String::from(""),
            addr_line_1: String::from(""),
            addr_line_2: String::from(""),
            vat_number: String::from(""),
            country: String::from(""),
        }
    }
}
