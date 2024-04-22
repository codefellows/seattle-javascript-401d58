"use strict";

const express = require("express");

const { customerCollection, orderCollection } = require("../models/index");

const router = express.Router();

// RESTful route declarations
router.get("/customers", getCustomers);
router.get("/customers/:id", getOneCustomer);
router.post("/customers", createCustomer);
router.put("/customers/:id", updateCustomer);
router.delete("/customers/:id", deleteCustomer);

// route handlers
async function getCustomers(req, res) {
  let allCustomers = await customerCollection.read(null, {
    include: { model: orderCollection.model },
  });
  res.status(200).json(allCustomers);
}

async function getOneCustomer(req, res) {
  let id = parseInt(req.params.id);
  let theCustomer = await customerCollection.read(id, {
    include: { model: orderCollection.model },
  });
  const orders = await theCustomer.getOrders();
  console.log(orders);
  res.status(200).json(theCustomer);
}

async function createCustomer(req, res) {
  let obj = req.body;
  let newCustomer = await customerCollection.create(obj);
  res.status(200).json(newCustomer);
}

async function updateCustomer(req, res) {
  let obj = req.body;
  let id = parseInt(req.params.id);
  let updatedCustomer = await customerCollection.update(id, obj);
  res.status(200).json(updatedCustomer);
}

async function deleteCustomer(req, res) {
  let id = parseInt(req.params.id);
  let deletedCustomer = await customerCollection.delete(id);
  res.status(204).json(deletedCustomer);
}

module.exports = router;
