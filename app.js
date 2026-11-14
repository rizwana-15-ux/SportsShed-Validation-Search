
const express = require('express');
const app = express();

// Middleware to read JSON data
app.use(express.json());

// Import kit routes
const kitRoutes = require('./routes/kits');

// Connect kit routes
app.use('/kits', kitRoutes);

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to SportsShed API!');
});

// Handle invalid routes
app.use((req, res) => {
    res.status(404).json({
        error: 'Route not found'
    });
});

// Start server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`SportsShed server running on port ${PORT}`);
});
