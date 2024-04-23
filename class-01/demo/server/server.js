'use strict';

const express = require('express');
const app = express();

const notFoundHandler = require('./handlers/404.js');
const errorHandler = require('./handlers/500.js');
const timeStamper = require('./middleware/stamper.js');

// Route Definitions
app.get('/', getHomePage);
app.get('/data', timeStamper, getData);
app.get('/bad', forceError);

app.use('*', notFoundHandler);
app.use(errorHandler);

// Route Handler Functions

function getHomePage(req, res) {
  res.status(200).send('Hello World')
}

function getData(req, res) {
  let outputObject = {
    10: "even",
    5: "odd",
    "time": req.timestamp // we got this from the middleware
  }
  res.status(200).json(outputObject);
}

function forceError(req, res, next) {
  // throw new Error("You messed up");
  next('you messsed up')
}

function start(port) {
  app.listen(port, () => {
    console.log(`Server up on port ${port}`)
  });
}

module.exports = {
  app: app,
  start: start
}
