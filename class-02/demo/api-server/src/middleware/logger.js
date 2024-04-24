'use strict';

function logger( req, res, next ) {
    console.log(`${req.method} ${req.path}`);
    console.log(`${req.requestTime}`);
    console.log(`${JSON.stringify(req.query)}`);
    console.log('');
    next();
}

module.exports = logger;
