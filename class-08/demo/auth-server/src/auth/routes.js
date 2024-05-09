'use strict';

const express = require('express');

const basicAuthentication = require("./middleware/basicAuth.js");
const {Users} = require('../models/db.js');

const router = express.Router();

// Define 2 routes
router.post('/signup', handleSignup);

// Sign In uses "basic" authentication to validate the user
router.post('/signin', basicAuthentication, handleSignin);

// Route Handlers
async function handleSignup(request, response, next) {
  try {
    const userData = request.body;
    const record = await Users.create(userData);
    response.status(201).json(record);
  } catch(error) { 
    console.error(error.message);
    next("Error Creating User");
  }
}


async function handleSignin (request, response) {
    console.log("Middleware add this to the request.body.user", request.body.user);
    response.status(200).json(request.user);
}

module.exports = router;