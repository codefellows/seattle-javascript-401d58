'use strict';

function notFound(req, res) {
  res.status(404).send({
    error: 404,
    route: req.path,
    message: "Not Found"
  })
}

module.exports = notFound;
