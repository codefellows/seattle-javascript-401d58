'use strict';

function handleNotFound(request, response) {
  let output = {
    code: 404,
    error: 'Resource Not Found',
    message: `Cannot ${request.method} ${request.url}`
  };
  response.status(404).json(output);
}

module.exports = handleNotFound;
