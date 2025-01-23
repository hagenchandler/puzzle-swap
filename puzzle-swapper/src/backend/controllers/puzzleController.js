// controllers/puzzleController.js
const Puzzle = require('../models/puzzleModel');

// Get all puzzles (protected route)
exports.getAllPuzzles = async (req, res) => {
  const puzzles = await Puzzle.findAll(); // Assume you're using Sequelize ORM
  res.status(200).json({ puzzles });
};

// Example of protected route using JWT middleware
// routes/puzzleRoutes.js
const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');
const puzzleController = require('../controllers/puzzleController');

router.get('/puzzles', authenticateToken, puzzleController.getAllPuzzles);

module.exports = router;

