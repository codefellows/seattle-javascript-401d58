'use strict';

function handleNotFound( req, res ) {
    let errorObject = {
      status: 404,
      error: "Not Found",
      path: req.path
    }

    res.status(404).json(errorObject);
  }

module.exports = handleNotFound;
