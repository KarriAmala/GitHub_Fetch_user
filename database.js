const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./github_users.db', (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to SQLite database');
    }
});

db.run(`
    CREATE TABLE IF NOT EXISTS github_users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        followers INTEGER,
        following INTEGER,
        public_repos INTEGER,
        location TEXT,
        fetched_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`);

module.exports = db;