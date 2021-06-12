CREATE DATABASE store1;
\c store1

CREATE TABLE games1(
    id SERIAL PRIMARY KEY NOT NULL,
    nome VARCHAR(120),
    preco DECIMAL(100,2)
);

\dt
SELECT * FROM games1;

\l