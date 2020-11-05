const fs = require('fs');
const request = require('request');

const inputAddress = process.argv[2];
const fileName = process.argv[3];

request(inputAddress, (error, response, body) => {
  if (error) { return error }
  fs.writeFile(fileName, body, (err) => {
    if (err) throw err;
    fs.stat(fileName, (err, stat) => {
      const fileSize = stat.size;
      console.log(`Downloaded and saved ${fileSize} bytes to ${fileName}`);
    })
  })
});

