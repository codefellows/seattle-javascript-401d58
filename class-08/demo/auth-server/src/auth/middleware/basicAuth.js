'use strict';

const base64 = require('base-64');
const bcrypt = require('bcrypt');

const {Users} = require('../../models/db.js');

async function basicAuthentication( request, response, next ) { 

    // Read the username and password from the Header using Base64
    let authHeader = request.headers.authorization;
    if(! authHeader) { 
        next("Authorization not possible"); 
        return;
    }

    let [authType, authString] = authHeader.split(' ');
    let decodedString = base64.decode(authString);
    // Basic am9obmNva29zOmpvaG5ueQ==
    // Decoded: johncokos:johnny

    // Split that string into 2 parts (username, password)
    let [username, password] = decodedString.split(':');
    console.log(username);
    console.log(password);

    try {
        // Find a database record for that username
        
        const user = await Users.findOne({where: {username:username}});

        // Compare the password with the encrypted thing in the database
        const isValid = await bcrypt.compare(password, user.password);

        if(isValid) { 
            request.user = user;
            next();
        } else {
            next("Invalid User");
        }

    } catch(e) { 
        console.error(e.message);
        next("Error finding user");
    }
}

module.exports = basicAuthentication;