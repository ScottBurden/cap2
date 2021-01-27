\c capstone2

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username text NOT NULL,
    pwd text NOT NULL
);
