const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL;

const {Sequelize, DataTypes } = require('sequelize');

let sequelize = new Sequelize(DATABASE_URL, {logging:false});

const peopleModel = require('./people.js');

module.exports = {
    db: sequelize,
    People: peopleModel(sequelize, DataTypes)
};
