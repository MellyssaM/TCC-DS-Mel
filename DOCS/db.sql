Exemplo de DB 

DROP database dd;
CREATE DATABASE dd;
USE dd;

CREATE TABLE pacientes(
    id_pac INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome_paciente VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR (255) NOT NULL
);

insert into pacientes values (null, "Humberto", "humberto123@gmail.com", "humbigo231");

select * from pacientes;