'use strict';

const axios = require('axios');

async function getFood() {
  const result = await axios('http://localhost:3000/api/v1/food');
  let food = result.data;
  food.forEach( food => {
    console.log(`Food: ${food.name} is yummy`);
  })
}

getFood();
