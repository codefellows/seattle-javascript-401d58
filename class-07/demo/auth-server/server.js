'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const { Sequelize, DataTypes } = require('sequelize');

// prepare the app
const app = express();
app.use(cors());

// initialize sequelize
const sequelize = new Sequelize(process.env.DATABASE_URL, {dialect:"postgres"});

// Configure the app to acquire data from the user in request.body
// Body is coming from a JSON object
app.use(express.json());
// Body is coming from a FORM (urlencoded)
app.use(express.urlencoded({extended: true}));


// Data Model for the user...
// PG Databases: String: VARCHAR(255)
// MySQL Databases: String: CHAR(255)
const Users = sequelize.define('User', {
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
    }
})

// ROUTES

app.get('/', (request, response) => {
    response.status(200).send("I am working");
});

app.post('/signup', async (request, response, next) => {
    try {
        // read the request.body which has the users' information
        const userData = request.body;

        // encrypt their password
        userData.password = await bcrypt.hash(userData.password, 5);

        // create a new record
        const record = await Users.create(userData);

        // return the record that got created
        response.status(201).json(record);
    } catch(error) { 
      // Triggers an error
      console.error(error.message);
      next("Error Creating User");
      /// Alternatively:
        // throw new Error("Error Creating User");
        // response.status(403).send("Error Creating User");
    }
});


app.post('/signin', async (request, response) => {

    // Read the username and password from the Header using Base64
    let authHeader = request.headers.authorization;
    let [authType, authString] = authHeader.split(' ');
    let decodedString = base64.decode(authString);
    // Basic am9obmNva29zOmpvaG5ueQ==
    // Decoded: johncokos:johnny

    // Split that string into 2 parts (username, password)
    let [username, password] = decodedString.split(':');
    console.log(username);
    console.log(password);

    try {
        // Find a database record for that username
        const user = await Users.findOne({where: {username:username}});
        console.log(user.username, user.password);

        // Compare the password with the encrypted thing in the database
        const isValid = await bcrypt.compare(password, user.password);

        if(isValid) { 
            response.status(200).json(user);
        } else {
            throw new Error('Invalid User');
        }

    } catch(e) { 
        console.error(e.message);
        response.status(403).send("User not found");
    }


});

// Connect to PG and Start our API Server
sequelize.sync()
  .then( () => {
    app.listen( process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`) );
  })
  .catch(err => console.error(err.message))