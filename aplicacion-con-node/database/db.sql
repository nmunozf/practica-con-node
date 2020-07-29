CREATE DATABASE database_pertenencias;

USE database_pertenencias;


CREATE TABLE usuarios(
    id int(11) NOT NULL AUTO_INCREMENT, 
    nombreUsuario varchar(16) NOT NULL,
    contraseña varchar(60) NOT NULL,
    nombreCompleto varchar(100) NOT NULL,
    PRIMARY KEY (id)
);



CREATE TABLE pertenencias(
    id int(11) not null,
    titulo varchar(150) not null,
    descripcion text not null,
    usuario_id int(11) not null,
    created_at timestamp not null default current_timestamp,
    constraint fk_usuario foreign key(usuario_id) references usuarios(id)
);

alter table pertenencias add primary key(id);
alter table pertenencias modify id int(11) not null auto_increment;
describe usuarios;
describe pertenencias;