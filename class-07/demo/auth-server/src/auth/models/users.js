'use strict';

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const SECRET = process.env.SECRET;

function Users(sequelize, DataTypes) {

  const model = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    token: {
        type: DataTypes.VIRTUAL,
        get() {
          const tokenObject = {
            username: this.username
          };
          return jwt.sign(tokenObject, SECRET)
        },
        set(tokenObj) {
          let token = jwt.sign(tokenObj, SECRET);
          return token;
        }

    }
 });

 
 // Inject logic into the process ...
 model.beforeCreate( async (user) => {
    user.password = await bcrypt.hash(user.password, 5);
 });

 // Creates a custom method for all users!
 model.authenticateWithToken = async function( token ) { 
    try {
        const parsedToken = jwt.verify(token, SECRET);
        const user = this.findOne({username: parsedToken.username});
        if( user ) { return user; }
        throw new Error("Invalid User From Token");
    } catch(e){
        throw new Error(e.message);
    }
 }

 // Auth with basic ....
 model.authenticateWithBasic = async function( username, passsword ) { 
  /// do the work here that we did in the middleware  
 }

 return model;

}

module.exports = Users;