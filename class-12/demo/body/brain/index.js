'use strict';

const express = require('express');
const { Server } = require('socket.io');
const { createServer } = require('node:http');

const app = express();
const server = createServer(app);
const io = new Server(server);

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log('App up and running'); });

// Automatically triggered anytime a client connects
io.on('connection', (socket) => {
  console.log('Connected', socket.id);

  // Eyes will emit this event ...
  socket.on('light', payload => {
    console.log("Recieved light event, with payload: ", payload);
    io.emit('brightness', payload);
  })

  // For you all ...
  socket.on('pickup', order => {
    io.emit('pickup', order);
  });

  socket.on('in-transit', order => {
    io.emit('in-transit', order);
  });

  socket.on('delivered', order => {
    io.emit('delivered', order);
  });

});
