'use strict';

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL;

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(DATABASE_URL, {logging:false});

// data models
const usersSchema = require('../auth/models/users.js');
// food, people, cars, recipes, ....
// make collections, connection, etc.

module.exports = {
  db: sequelize,
  Users: usersSchema(sequelize, DataTypes)
};