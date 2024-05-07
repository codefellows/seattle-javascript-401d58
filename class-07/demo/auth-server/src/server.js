'use strict';

const express = require('express');
const cors = require('cors');

const handleErrors = require('./middleware/500.js');
const handleNotFound = require('./middleware/404.js');

const authRoutes = require('./auth/routes.js');
const basicAuthentication = require("./auth/middleware/basicAuth.js");
const bearerAuthentication = require("./auth/middleware/bearerAuth.js");

// prepare the app
const app = express();
app.use(cors());

// Configure the app to acquire data from the user in request.body
// Body is coming from a JSON object
app.use(express.json());

// Body is coming from a FORM (urlencoded)
app.use(express.urlencoded({extended: true}));

// INTERNAL ROUTES
app.use('/auth', authRoutes);

app.get('/', (request, response) => {
    response.status(200).send("I am working");
});

app.get('/test-basic', basicAuthentication, (request, response) => {
    response.status(200).send("Basic route works!");
});

app.get('/test-bearer', bearerAuthentication, (request, response) => {
  response.status(200).send("Bearer route works!");
});

app.use("*", handleNotFound);
app.use(handleErrors);

module.exports = {
  server: app,
  start: (port) => {
    app.listen( port, () => console.log(`Listening on ${port}`) );
  }
}
