const validatePlayer = (req, res, next) => {
    const { name, sport } = req.body;

    if (typeof name !== 'string' || !name.trim()) {
        return res.status(400).json({ error: "Player name is required" });
    }

    if (typeof sport !== 'string' || !sport.trim()) {
        return res.status(400).json({ error: "Sport is required" });
    }

    next();
};

const validateKit = (req, res, next) => {
    const { name, sport } = req.body;

    if (typeof name !== 'string' || !name.trim()) {
        return res.status(400).json({ error: "Kit name is required" });
    }

    if (typeof sport !== 'string' || !sport.trim()) {
        return res.status(400).json({ error: "Sport is required" });
    }

    next();
};

const validateLoan = (req, res, next) => {
    const { player_id, kit_id, loan_date } = req.body;

    if (!Number.isInteger(player_id) || player_id <= 0) {
        return res.status(400).json({ error: "Valid player ID is required" });
    }

    if (!Number.isInteger(kit_id) || kit_id <= 0) {
        return res.status(400).json({ error: "Valid kit ID is required" });
    }

    if (typeof loan_date !== 'string' || !loan_date.trim()) {
        return res.status(400).json({ error: "Loan date is required" });
    }

    next();
};

module.exports = {
    validatePlayer,
    validateKit,
    validateLoan
};