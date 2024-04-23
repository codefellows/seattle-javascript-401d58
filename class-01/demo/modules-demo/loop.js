'use strict';

/*
  Params: Array of Integers
  Returns: null
*/
function timesTen(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] * 10);
  }
}

function timesFive(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] * 5);
  }
}



// If we are going to import this module into another file, we need to export it.
// module.exports = timesTen;
module.exports = {timesTen, timesFive};
