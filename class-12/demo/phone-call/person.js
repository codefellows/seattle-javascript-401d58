'use strict';

const io = require('socket.io-client');

let serverURL = "https://872d-50-47-110-82.ngrok-free.app";
// let serverURL = "http://localhost:3000";

const socket = io.connect(serverURL);

socket.on('hi', payload => {
  console.log('Person heard "hi" from hub', payload);
  socket.emit('goodbye', { message: 'Goodbye from the person app' });
});

socket.on('bye', handleGoodbye);
function handleGoodbye(payload) {
  console.log("Goodybye received from hub:", payload);
}

socket.emit('hello', { message: 'Hello from the person app' });
