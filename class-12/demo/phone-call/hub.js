'use strict';

const port = process.env.PORT || 3000;

// This is the equivalent of app.listen(port) in express apps
// io is the "event pool" that we can listen to and emit events on
const io = require('socket.io')(port);

// This code runs as each user connects to the server/hub
io.on('connection', (socket) => {

  console.log("Connected to the hub!", socket.id);

  socket.on('hello', payload => {
    console.log('Server heard "hello" from person', payload);
    socket.emit('hi', { message: 'Hello, thanks for checking in!' });
  });

  socket.on('goodbye', payload => {
    console.log('Server heard "goodbye" from person', payload);
    io.to(socket.id).emit('bye', "SO long, suckers");
  });

});
