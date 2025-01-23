const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Register new user
exports.register = async (req, res) => {
  const { username, password } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ where: { username } });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Hash password before storing it
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save user to database
  const newUser = await User.create({ username, password: hashedPassword });

  res.status(201).json({ message: 'User created', user: newUser });
};

// Login user and return JWT token
exports.login = async (req, res) => {
  const { username, password } = req.body;

  // Find the user in the database
  const user = await User.findOne({ where: { username } });
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Compare hashed password
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Generate JWT token
  const token = jwt.sign(
    { userId: user.id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.status(200).json({ message: 'Login successful', token });
};

