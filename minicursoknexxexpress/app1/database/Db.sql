CREATE DATABASE store;
\c store

CREATE TABLE games(
    id SERIAL PRIMARY KEY NOT NULL,
    nome VARCHAR(120),
    preco DECIMAL(100,2) 
);

\dt 
SELECT * FROM games;