import mysql from 'mysql2';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'TimesOfWhimsey4!',
    database: 'election'
});

export default db;