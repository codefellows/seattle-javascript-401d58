'use strict';

function eyelid(payload) {
  if(payload.brightness > 75) {
    let output = 'Eyelids squint';
    console.log(output);
    return output;
  }
}

function add(a,b) {
  return a+b;
}

module.exports = eyelid;


/*
  // mock of console.log() call it fakeConesole.log
  const fakeConsole = { log: jest.fn() };
  it('should squint', () => {
    let payload = { brightness: 76 };
    expect( eyelid(payload).toEqual('Eyelids squint') ) ;
    expect( fakeConsole.log ).toHaveBeenCalledWith('Eyelids squint');

    payload = { brightness: 40 };
    expect( eyelid(payload).toEqual(undefined) ) ;
  }
*/
