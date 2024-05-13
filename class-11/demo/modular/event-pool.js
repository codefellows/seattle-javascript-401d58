'use strict';

// Create a singleton, which is a single instance of a class
// This is a classic design pattern
// The exported instance is SHARED across all modules

const Events = require('events');
const events = new Events();

// This only happens once!
module.exports = events;
