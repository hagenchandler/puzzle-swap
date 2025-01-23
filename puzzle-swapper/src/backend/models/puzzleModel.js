// models/puzzleModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assuming you have a database config file

const Puzzle = sequelize.define('Puzzle', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING, // URL to an image or path to image file
  },
  description: {
    type: DataTypes.TEXT,
  },
  ownerId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users',
      key: 'id',
    },
  },
}, {
  timestamps: true,
});

module.exports = Puzzle;

