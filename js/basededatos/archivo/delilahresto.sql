CREATE SCHEMA IF NOT EXISTS delilahresto;

use delilahresto;

CREATE TABLE IF NOT EXISTS roles (
    id int NOT NULL AUTO_INCREMENT,
    description varchar(255) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO roles (description) VALUES ('clientes'), ('admin');

CREATE TABLE IF NOT EXISTS usuarios (
    id int NOT NULL AUTO_INCREMENT,
    usuario varchar(255) NOT NULL,
    nombre_apellido varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    telefono varchar(255) NOT NULL,
    direccion varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    roleId int DEFAULT NULL,
    PRIMARY KEY (id),
    KEY roleId (roleId),
    CONSTRAINT users_ibfk_1 FOREIGN KEY (roleId) REFERENCES roles (id) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO usuarios
(usuario, nombre_apellido, email, telefono, direccion, password, roleId) 
VALUES ("u_Admin","Julian Montoya","jmadmin@admin.com","3154878965","Calle 45","Jmadmin20*", 2);

CREATE TABLE IF NOT EXISTS productos (
    id int NOT NULL AUTO_INCREMENT,
    description varchar(255) NOT NULL,
    precio decimal(10,0) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;