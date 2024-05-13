'use strict';

const Events = require('events');

// Create an instance of an "event pool"
const myEvents = new Events();

// Every event has 2 major things: name, payload

// Subscribe/Listen/Respond to an event with "on"
myEvents.on('light', pupil);
myEvents.on('light', skin);
myEvents.on('light', eyelids);

// LIGHT HANDLERS
function pupil(payload) {
  if(payload.brightness > 50) {
    console.log('Pupil Dialated');
  }
}

function skin(payload) {
  console.log('Hair stands up');
}

function eyelids(payload) {
  if(payload.brightness > 75) {
    console.log('Eyelids squint');
  }
}

// Emit/Trigger an event ...
setInterval(() => {
  let brightness = Math.floor(Math.random() * 100);
  console.log('--------------');
  console.log('Light Level:', brightness);
  myEvents.emit('light', { brightness });
}, 1);

// emit an event manually -- NO: Too many things to manage
// pupil({brightness: 100});
// skin({brightness: 100});
// eyelids({brightness: 100});



