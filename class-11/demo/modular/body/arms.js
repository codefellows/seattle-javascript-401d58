'use strict';

const events = require('../event-pool.js');

// Register the handlers and start listening for events
events.on('light', goosebumps);
events.on('light', coverFace);

function goosebumps(payload) {
  console.log('Goosebumps');
}

function coverFace(payload) {
  if(payload.brightness > 65) {
    console.log('Arms Cover Face');
  }
}
