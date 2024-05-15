'use strict';

require('dotenv').config();

const io = require('socket.io-client');

const URL = process.env.HUB;

console.log('Connecting to:', URL);
const socket = io.connect(URL);

socket.on('pickup', handlePickup);

// Let the server know that I'm down to pick up orders
socket.emit('driver-ready');


function handlePickup(payload) {
  // setTimeout: Wait xxxx seconds and then emit in-transit

  setTimeout(() => {
    console.log('DRIVER: Picked Up', payload.orderID);
    socket.emit('package-in-transit', payload);
  }, 1000);

  setTimeout(() => {
    console.log('DRIVER: Delivered', payload.orderID);
    socket.emit('package-delivered', payload);
    socket.emit('driver-ready');
  }, 4000);

}
