'use strict';

const express = require('express');
const dataModules = require('../models');

/*
  {
    db: sequelize,
    food: {Collection}
    clothes: {Collection}
  }
*/

const router = express.Router();

// /api/vi/food
router.param('model', (req, res, next) => {
  const modelName = req.params.model; // food
  // dataModules[food] is the foodCollection from above
  if (dataModules[modelName]) {
    req.model = dataModules[modelName];
    next();
  } else {
    next('Invalid Model');
  }
});

// ---- /api/v1/food
//      "food" is the :model parameter
router.get('/:model', handleGetAll);
router.get('/:model/:id', handleGetOne);
router.post('/:model', handleCreate);
router.put('/:model/:id', handleUpdate);
router.delete('/:model/:id', handleDelete);

async function handleGetAll(req, res) {
  // Food.get or Clothes.get
  let allRecords = await req.model.get();
  res.status(200).json(allRecords);
}

async function handleGetOne(req, res) {
  const id = req.params.id;
  let theRecord = await req.model.get(id)
  res.status(200).json(theRecord);
}

async function handleCreate(req, res) {
  let obj = req.body;
  let newRecord = await req.model.create(obj);
  res.status(201).json(newRecord);
}

async function handleUpdate(req, res) {
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await req.model.update(id, obj)
  res.status(200).json(updatedRecord);
}

async function handleDelete(req, res) {
  let id = req.params.id;
  let deletedRecord = await req.model.delete(id);
  res.status(200).json(deletedRecord);
}


module.exports = router;
