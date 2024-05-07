'use strict';

function handleErrors(error, request, response, next) { 
  const message = {
    path: request.path,
    method: request.method,
    code: 500,
    error: error.message
  }
  response.status(500).json(message);
}

module.exports = handleErrors;
