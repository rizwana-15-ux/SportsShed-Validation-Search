const db = require('./database');

setTimeout(() => {
    db.close();
}, 500);
