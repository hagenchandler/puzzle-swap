// routes/puzzleRoutes.js
const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');
const puzzleController = require('../controllers/puzzleController');

// GET all puzzles (protected route)
router.get('/', authenticateToken, puzzleController.getAllPuzzles);

// POST a new puzzle (protected route)
router.post('/', authenticateToken, puzzleController.createPuzzle);

module.exports = router;

