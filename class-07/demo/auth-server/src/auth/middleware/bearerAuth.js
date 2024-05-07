'use strict';

const {Users} = require('../../models/db.js');

async function bearerAuthentication( request, response, next ) { 
    // request.headers.authorization should look like: Bearer aldsfkjasdlfkjasdlfkjasdlfkjadsf

    if( ! request.headers.authorization ) { next("Invalid Loging"); return; }

    let token = request.headers.authorization.split(' ').pop();

    let validUser = await Users.authenticateWithToken(token);
    if( validUser ) {
        console.log("VALID USER!", validUser);
        request.user = validUser;
        next();
    } else {
        next("Invalid Login");
    }
}

module.exports = bearerAuthentication;