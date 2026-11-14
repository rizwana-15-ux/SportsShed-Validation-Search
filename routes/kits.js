
const express = require('express');
const router = express.Router();

const db = require('../database');
const { validateKit } = require('../middleware/validation');

// 1. GET all kits or search by sport
router.get('/', (req, res) => {
    const { sport } = req.query;

    let sql = 'SELECT * FROM kits';
    let params = [];

    if (sport) {
        sql += ' WHERE LOWER(sport) = LOWER(?)';
        params.push(sport.trim());
    }

    db.all(sql, params, (err, rows) => {
        if (err) {
            return res.status(500).json({
                error: 'Unable to retrieve kits'
            });
        }

        res.status(200).json(rows);
    });
});


// 2. GET summary of kits by sport
router.get('/summary', (req, res) => {
    const sql = `
        SELECT sport, COUNT(*) AS count
        FROM kits
        GROUP BY sport
    `;

    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({
                error: 'Unable to retrieve summary'
            });
        }

        res.status(200).json(rows);
    });
});


// 3. ADD a new kit
router.post('/', validateKit, (req, res) => {
    const { name, sport } = req.body;

    const sql = `
        INSERT INTO kits (name, sport)
        VALUES (?, ?)
    `;

    db.run(sql, [name.trim(), sport.trim()], function(err) {
        if (err) {
            return res.status(500).json({
                error: 'Unable to add kit'
            });
        }

        res.status(201).json({
            message: 'Kit added successfully',
            id: this.lastID
        });
    });
});


// 4. UPDATE an existing kit
router.put('/:id', validateKit, (req, res) => {
    const { name, sport } = req.body;
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            error: 'Invalid kit ID'
        });
    }

    const sql = `
        UPDATE kits
        SET name = ?, sport = ?
        WHERE id = ?
    `;

    db.run(sql, [name.trim(), sport.trim(), id], function(err) {
        if (err) {
            return res.status(500).json({
                error: 'Unable to update kit'
            });
        }

        if (this.changes === 0) {
            return res.status(404).json({
                error: 'Kit not found'
            });
        }

        res.status(200).json({
            message: 'Kit updated successfully'
        });
    });
});

module.exports = router;
