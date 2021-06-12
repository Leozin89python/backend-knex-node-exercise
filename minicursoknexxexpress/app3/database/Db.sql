CREATE DATABASE store2;
\c store2

CREATE TABLE games2(
    id SERIAL PRIMARY KEY NOT NULL,
    nome VARCHAR(120),
    preco DECIMAL(100,2)
);

\dt

SELECT * FROM games2;

\l


\q