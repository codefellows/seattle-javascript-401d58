'use strict';

function eyelid(payload) {
  if(payload.brightness > 75) {
    let output = 'Eyelids squint';
    console.log(output);
    return output;
  }
}

module.exports = eyelid;


/*
  it('should squint', () => {
    let payload = { brightness: 76 };
    expect( eyelid(payload).toEqual('Eyelids squint') ) ;
  }
*/
