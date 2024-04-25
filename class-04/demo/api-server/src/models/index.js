const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL;

const {Sequelize, DataTypes } = require('sequelize');

let sequelize = new Sequelize(DATABASE_URL, {logging:false});

const Collection = require('./collection.js');

const customerSchema = require('./customer.model.js');
const ordersSchema = require('./orders.model.js');

const customerModel = customerSchema(sequelize, DataTypes);
const ordersModel = ordersSchema(sequelize, DataTypes);

// foreign key is the column name in the child table that references the sourceKey in the parent table
customerModel.hasMany(ordersModel, {foreignKey: 'customerId', sourceKey: 'id'});
ordersModel.belongsTo(customerModel, {foreignKey: 'customerId', targetKey: 'id'});

const customerCollection = new Collection(customerModel);
const ordersCollection = new Collection(ordersModel);

module.exports = {
    db: sequelize,
    Customers: customerCollection,
    Orders: ordersCollection
};
