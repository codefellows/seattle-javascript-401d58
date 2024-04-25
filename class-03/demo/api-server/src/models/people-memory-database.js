'use strict';

let data = {
    1: { firstName: "John", lastName: "Doe", age: 25 },
    2: { firstName: "Mary", lastName: "Johnson", age: 22 },
};

function findAll() {
  return Object.values(data);
}

function findOne(id) {
  return data[id];
}

function create(record) {
  record.id = Math.random();
  data[record.id] = record;
  return data[record.id];
}

function update(id, record) {
  data[id] = record;
  return data[id];
}

function destroy(id) {
  delete data[id];
  return data[id];
}

module.exports = { findAll, findOne, create, update, destroy };
