'use strict';

require('dotenv').config();

const io = require('socket.io-client');

const Chance = require('chance');
const fake = new Chance();

const { handlePickup, handleDelivery } = require('./handlers.js');

const URL = process.env.HUB;

console.log('Connecting to:', URL);
const socket = io.connect(URL);

// Subscribe to the right events and handle them with the right handlers
socket.on('in-transit', handlePickup);
socket.on('delivered', handleDelivery);

makeFakeOrders();

function makeFakeOrders() {
  // setInterval runs over and over every xxxx miliseconds
  setInterval(() => {
    let order = {
      orderID: fake.guid(),
      status: 'ready',
      store: fake.company(),
      customer: fake.name(),
      address: fake.address(),
      amount: fake.dollar()
    };
    console.log('VENDOR: New Order', order.orderID);
    socket.emit('ready-for-pickup', order);
  }, 1000);
}
