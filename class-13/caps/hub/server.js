'use strict';

require('dotenv').config();

const PORT = process.env.PORT || 3000;

// io is the Events and Socket Manager
console.log('Listening on port:', PORT);
const io = require('socket.io')(PORT);

io.on('connection', handleClientConnection);

function handleClientConnection(socket) {
  console.log('New Connection:', socket.id);

  socket.on('ready-for-pickup', (payload) => {
    payload.status = 'queued for pickup';

    console.log('HUB: Order Queued for Pickup', payload);
    console.log('---------------');
    io.emit('pickup', payload);
  });

  // The driver is telling us that the package is in transit
  socket.on('package-in-transit', (payload) => {
    payload.status = 'in transit';
    console.log('HUB: Package in Transit', payload);
    console.log('---------------');
    io.emit('in-transit', payload);
  });

  // The driver is telling us that the package has been delivered
  socket.on('package-delivered', (payload) => {
    payload.status = 'delivered';
    console.log('HUB: Package Delivered', payload);
    console.log('---------------');
    io.emit('delivered', payload);
  });

}

