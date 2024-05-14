'use strict';

const io = require('socket.io-client');

const URL = 'http://localhost:3000';
// const URL = 'https://brain-c3y4.onrender.com';

const brainConnection = io.connect(URL);

brainConnection.on('brightness', payload => {
  if ( payload.brightness > 50 ) {
    console.log("Covering our face");
    brainConnection.emit('light', {brightness: 0});
  }
});

