'use strict';

// All routing and data management for "people"

const express = require('express');

const router = express.Router();

const {People} = require('../models/index.js');


// RESTful route definitions
router.get('/people', getPeople);
router.get('/people/:id', getOnePerson);
router.post('/people', createPerson);
router.put('/people/:id', updatePerson);
router.delete('/people/:id', deletePerson);

// ROUTE HANDLERS
async function getPeople( request, response ) {
  let data = await People.findAll();
  response.status(200).json(data);
}

async function getOnePerson( request, response ) {
  let id = request.params.id;
  let data = await People.findOne({where: {id:id}});
  response.status(200).json(data);
}

async function createPerson( request, response ) {
  let data = request.body;
  let newPerson = await People.create(data);
  response.status(201).json(newPerson);
}

async function updatePerson( request, response ) {
  let id = request.params.id;
  let data = request.body;
  let person = await People.findOne({where: {id:id}});
  let updatedPerson = await person.update(data);
  response.status(200).json(updatePerson);
}

async function deletePerson( request, response ) {
  let id = request.params.id;
  let deletedPerson = await People.destroy( {where: {id:id}} );
  if ( typeof deletedPerson === "number" ) {
    response.status(204).send(null);
  } else {
    throw new Error("Error deleting record");
  }
}



module.exports = router;
