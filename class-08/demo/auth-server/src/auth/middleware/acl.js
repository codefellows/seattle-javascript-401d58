'use strict';

// "curried" function
// This function returns another function that has access to the capability

function accessControl(capability) {

  return (request, response, next) => {
    let user = request.user;

    console.log(user.username, user.role, capability, user.capabilities);

    if (user.capabilities.includes(capability)) {
      next();
    } else {
      next("Access Denied");
    }
  }

}

module.exports = accessControl;
