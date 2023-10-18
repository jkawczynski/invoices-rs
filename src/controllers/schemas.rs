use serde::Deserialize;

#[derive(Debug, Deserialize)]
pub struct CreateClientSchema {
    pub company_name: String,
    pub addr_line_1: String,
    pub addr_line_2: String,
    pub vat_number: String,
    pub country: u32,
}
