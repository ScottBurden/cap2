//  init PostgresQL db for Express API

const { Client } = require("pg");

let DB_URI;

if (process.env.NODE_ENV === "test") {
    DB_URI = "postgresql:///album";
}
else {
    DB_URI = "postgresql:///capstone2";
}

let db = new Client({
    connectionString: DB_URI
});

db.connect();

module.exports = db;