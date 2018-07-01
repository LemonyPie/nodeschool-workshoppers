const fs = require('fs');

let file = process.argv[2];
fs.readFile(file, 'utf-8', (err, data) => {
  if(err){
    throw new Error(err);
  }
  let numberOfLines = data.split('\n').length - 1;
  console.log(numberOfLines);
});
