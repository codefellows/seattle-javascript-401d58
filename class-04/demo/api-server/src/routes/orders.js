'use strict';

// All routing and data management for "people"

const express = require('express');
const router = express.Router();

const {Customers, Orders} = require('../models/index.js');

const Model = Orders;

// RESTful route definitions
router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', createRecord);
router.put('/:id', updateRecord);
router.delete('/:id', deleteRecord);

// ROUTE HANDLERS
async function getAll( request, response ) {
  let data = await Model.read(null, {
    include: {
      model: Customers.model
    }
  });
  response.status(200).json(data);
}

async function getOne( request, response ) {
  let id = request.params.id;
  let data = await Model.read(id, {
    include: {
      model: Customers.model
    }
  });
  response.status(200).json(data);
}

async function createRecord( request, response ) {
  let data = request.body;
  let newRecord = await Model.create(data);
  response.status(201).json(newRecord);
}

async function updateRecord( request, response ) {
  let id = request.params.id;
  let data = request.body;
  let updatedRecord = await Model.update(id, data);
  response.status(200).json(updatedRecord);
}

async function deleteRecord( request, response ) {
  let id = request.params.id;
  let deletedRecord = await Model.delete(id);
  if ( typeof deletedRecord === "number" ) {
    response.status(204).send(null);
  } else {
    throw new Error("Error deleting record");
  }
}



module.exports = router;
