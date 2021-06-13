CREATE DATABASE store3;
\c store3

DROP DATABASE store3;

CREATE TABLE games3(
    id SERIAL PRIMARY KEY NOT NULL,
    nome VARCHAR(120),
    preco DECIMAL(100,2)
);

DROP TABLE games3;

\dt

SELECT * FROM games3;

\q