const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST request to register a user
router.post('/register', authController.register);

// POST request to login and get JWT token
router.post('/login', authController.login);

module.exports = router;

