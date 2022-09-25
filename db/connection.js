const mysql = require("mysql2");

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        Password: 'root',
        database: 'employee_db'
    },
);

module.exports = db;