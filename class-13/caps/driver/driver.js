'use strict';

require('dotenv').config();

const io = require('socket.io-client');

const URL = process.env.HUB;

console.log('Connecting to:', URL);
const socket = io.connect(URL);

socket.on('pickup', handlePickup);


function handlePickup(payload) {
  // setTimeout: Wait xxxx seconds and then emit in-transit

  setTimeout(() => {
    console.log('DRIVER: Picked Up', payload.orderID);
    socket.emit('package-in-transit', payload);
  }, 1000);

  setTimeout(() => {
    console.log('DRIVER: Delivered', payload.orderID);
    socket.emit('package-delivered', payload);
  }, 4000);

}
