CREATE DATABASE IF NOT EXISTS prueba;
USE prueba;

CREATE TABLE personas(
id INT(11) not null auto_increment,
nombre VARCHAR(45) default null,
edad INT(11) default null,
primary key(id)
);

describe personas;