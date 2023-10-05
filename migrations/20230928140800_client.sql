CREATE TABLE IF NOT EXISTS clients (
    id CHAR(36) PRIMARY KEY NOT NULL,
    company_name varchar(255) NOT NULL,
    addr_line_1 varchar(120) NOT NULL,
    addr_line_2 varchar(120) NOT NULL,
    vat_number varchar(60) NOT NULL,
    country varchar(50) NOT NULL
);

