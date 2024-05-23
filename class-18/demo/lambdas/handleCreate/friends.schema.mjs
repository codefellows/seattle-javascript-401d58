'use strict';

import dynamoose from 'dynamoose';

const friendsSchema = new dynamoose.Schema({
  'id': String,
  'name': String,
  'phone': String,
});

export default dynamoose.model('friends', friendsSchema);
