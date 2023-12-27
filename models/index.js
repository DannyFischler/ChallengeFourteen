const Sequelize = require('sequelize');
const config = require('../config/config.js');

const sequelize = new Sequelize(config.development);

// Import models
const User = require('./user')(sequelize, Sequelize.DataTypes);
// Import other models and associate them

module.exports = { sequelize, Sequelize, User };
