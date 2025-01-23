// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');

// GET user profile (protected route)
router.get('/profile', authenticateToken, userController.getUserProfile);

module.exports = router;

