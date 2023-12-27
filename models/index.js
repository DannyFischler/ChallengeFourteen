const Sequelize = require('sequelize');
const config = require('../config/config.js');

const sequelize = new Sequelize(config.development);

const User = require('./user')(sequelize, Sequelize.DataTypes);

module.exports = { sequelize, Sequelize, User };
