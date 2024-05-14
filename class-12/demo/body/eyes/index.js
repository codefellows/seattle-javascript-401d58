'use strict';

const io = require('socket.io-client');

const URL = 'http://localhost:3000';
// const URL = 'https://brain-c3y4.onrender.com';
// const URL = 'http://ded8-50-47-110-82.ngrok-free.app';

const brainConnection = io.connect(URL);

brainConnection.on('brightness', payload => {
  if ( payload.brightness === 0 ) {
    console.log("Eyes Wide Open!");
  }
  if ( payload.brightness > 75 ) {
    console.log("Sqinting");
  }
});

setInterval(() => {
  brainConnection.emit('light', {brightness: Math.floor(Math.random() * 100)});
}, 1000);
