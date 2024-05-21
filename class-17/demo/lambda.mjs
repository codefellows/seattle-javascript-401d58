/*
  In express, this happens
  app.get('/something', handler);
  
  In socket apps, this happens
  socket.on('alert', handler)

  At AWS, this happens:
  aws.on('S3 upload', handler);
  aws.on('EB deploy success', handler)

*/

import {S3Client, GetObjectCommand, PutObjectCommand} from '@aws-sdk/client-s3';

export const handler = async (event) => {
  
  // All of my code logic goes here...
  // event carries the "payload". In our case, it's under event.body
  // console.log(JSON.stringify(event, undefined, 2));
  
  let s3Client = new S3Client({ region:'us-west-2'});
  let name = event.Records[0].s3.object.key;  // images/bubble.jpg
  let size = event.Records[0].s3.object.size;
  let type = name.split('.')[1];
  let imageDetails = { name, size, type };
  console.log('Adding', imageDetails);
  
  // Download "images.json" from the bucket
  // const images = .... MAGIC!
  
  // It should be an array
  // Add information about this image to the array
  // images.push(imageDetails);
  
  // re-upload images.json
  // Make sure you have proven that this will NOT run if you upload the images.json file!
  
  // function always responds with an object that has "statusCode" and "body"
  // eg. response.status(200).send("hello from lambda");
  const response = {
    statusCode: 200,
    body: `Uploaded!`
  };
  
  return response;

  
};
