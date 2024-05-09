'use strict';

function handleNotFound(request, response) { 
  const message = {
    path: request.path,
    method: request.method,
    code: 404,
  }
  response.status(404).json(message);
}

module.exports = handleNotFound;