
const sqlite3 = require('sqlite3').verbose();

// Create or connect to database
const db = new sqlite3.Database('./sportsshed.db', (err) => {
    if (err) {
        console.error('Database connection failed:', err.message);
    } else {
        console.log('Database connected successfully!');
    }
});

// Create tables
db.serialize(() => {

    // Players table
    db.run(`
        CREATE TABLE IF NOT EXISTS players (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            sport TEXT NOT NULL
        )
    `);

    // Kits table
    db.run(`
        CREATE TABLE IF NOT EXISTS kits (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            sport TEXT NOT NULL,
            status TEXT NOT NULL DEFAULT 'available'
        )
    `);

    // Loans table
    db.run(`
        CREATE TABLE IF NOT EXISTS loans (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            player_id INTEGER NOT NULL,
            kit_id INTEGER NOT NULL,
            loan_date TEXT NOT NULL,
            status TEXT NOT NULL DEFAULT 'active',
            FOREIGN KEY (player_id) REFERENCES players(id),
            FOREIGN KEY (kit_id) REFERENCES kits(id)
        )
    `);

    console.log('All tables created successfully!');
});

module.exports = db;
