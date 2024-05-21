const { handler } = require("./index");

handler({
  Records: [
    {
      s3: {
        bucket: { name: "dsouther-testing" },
        object: { key: "test", size: 2002 },
      },
    },
  ],
}).then(() => console.log("Check your bucket"));
