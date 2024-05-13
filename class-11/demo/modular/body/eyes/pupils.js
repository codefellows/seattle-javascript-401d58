'use strict';

function pupil(payload) {
  if(payload.brightness > 50) {
    console.log('Pupil Dialated');
  }
}


module.exports = pupil;
