'use strict';

function handlePickup(payload) {
  console.log(`VENDOR: Cool, ${payload.orderID} is on the way!`);
}

function handleDelivery(payload) {
  console.log(`VENDOR: Thanks for delivering ${payload.orderID}`);
}


module.exports = { handlePickup, handleDelivery };
