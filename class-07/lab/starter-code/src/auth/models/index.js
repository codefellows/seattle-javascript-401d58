'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const userSchema = require('./users.js');

const environment = process.env.NODE_ENV;
let DATABASE_URL = process.env.DATABASE_URL;
let db_config = {
  logging: false,
};

switch (environment) {
  case 'test':
    DATABASE_URL = 'sqlite::memory'
    break;
  case 'production':
    db_config.dialectOptions = {
      ssl: true,
      rejectUnauthorized: false,
    }
    break;
  case 'development':
    db_config.logging = true;
    break;
  default:
    console.log('Connecting to ' + DATABASE_URL, db_config);
}

const sequelize = new Sequelize(DATABASE_URL, db_config);

module.exports = {
  db: sequelize,
  users: userSchema(sequelize, DataTypes),
};
