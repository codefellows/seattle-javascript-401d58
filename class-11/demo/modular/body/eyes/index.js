'use strict';

const events = require('../event-pool.js');
const pupil = require('./pupils.js');
const eyelid = require('./eyelids.js');

// Registers and listens
events.on('light', eyelid);
events.on('light', pupil);

// pretent we open our eyes and the eyes detect light
// Event gets triggered
setInterval( () => {
  let brightness = Math.floor(Math.random() * 100);
  console.log('----------------------');
  console.log('Light Detected', brightness);
  events.emit('light-detected', {brightness});
}, 250)
