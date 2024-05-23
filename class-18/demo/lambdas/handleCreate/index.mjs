'use strict';

// You can require any external dependencies here
import {v4 as uuid} from 'uuid';
import dynamoose from 'dynamoose';
import friendModel from './friends.schema.mjs'

// All Serverless functions (AWS and Azure) are "async" ...
export const handler = async (event) => {

  try {
    // event.body should contain our data as a JSON string (not an object)
    const {name, phone} = JSON.parse(event.body);

    // create an id
    const id = uuid();

    console.log('Saving', event);

    // Save it
    const record = new friendModel({id, name, phone});

    const data = await record.save();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };

  } catch (e) {

    return {
      statusCode: 500,
      response: e.message,
    };

  }

};
