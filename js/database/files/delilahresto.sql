CREATE SCHEMA IF NOT EXISTS delilahresto;

use delilahresto;

CREATE TABLE IF NOT EXISTS roles (
    id int NOT NULL AUTO_INCREMENT,
    description varchar(255) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO roles (description) VALUES ('client'), ('admin');

CREATE TABLE IF NOT EXISTS users (
    id int NOT NULL AUTO_INCREMENT,
    username varchar(255) NOT NULL,
    fullname varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    cellphone varchar(255) NOT NULL,
    shippingAddress varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    roleId int DEFAULT NULL,
    PRIMARY KEY (id),
    KEY roleId (roleId),
    CONSTRAINT users_ibfk_1 FOREIGN KEY (roleId) REFERENCES roles (id) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO users 
(username, fullname, email, cellphone, shippingAddress, password, roleId) 
VALUES ("user_admin","My fullname admin","admin@admin.com","0123456789","Calle 10","admin123", 2);

CREATE TABLE IF NOT EXISTS products (
    id int NOT NULL AUTO_INCREMENT,
    description varchar(255) NOT NULL,
    price decimal(10,0) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;