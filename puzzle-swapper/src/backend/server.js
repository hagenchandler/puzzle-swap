// server.js
const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/database'); // Assuming you have a config file for Sequelize
const authRoutes = require('./routes/authRoutes');
const puzzleRoutes = require('./routes/puzzleRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/puzzles', puzzleRoutes);
app.use('/api/users', userRoutes);

// Connect to the database and start the server
sequelize.sync().then(() => {
  app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running');
  });
});

