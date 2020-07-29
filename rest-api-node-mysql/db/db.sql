CREATE DATABASE IF NOT EXISTS prueba;
USE prueba;

CREATE TABLE personas(
id INT(11) not null auto_increment,
nombre VARCHAR(45) default null,
edad INT(11) default null,
primary key(id)
);

describe personas;
insert into personas values(1,'Nicolas',27),(2,'Sebastian',21);

select * from personas;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'nicolas123';