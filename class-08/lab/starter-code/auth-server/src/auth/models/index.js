'use strict';

const userModel = require('./users.js');
const { Sequelize, DataTypes } = require('sequelize');

const environment = process.env.NODE_ENV;
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';
const testOrProduction = (environment === 'test' || environment === 'production');

const sequelize = new Sequelize(DATABASE_URL, testOrProduction ? { logging: false } : {});

module.exports = {
  db: sequelize,
  users: userModel(sequelize, DataTypes),
}
