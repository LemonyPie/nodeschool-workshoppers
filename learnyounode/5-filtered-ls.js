const fs = require('fs');
const path = require('path');

const dir = process.argv[2];
const ext = process.argv[3];
const list = fs.readdir(dir, (err, list) => {
  if(err){
    throw new Error(err);
  } 
  let files = list.filter((filename) => {
    return path.extname(filename) == `.${ext}`;
  })
  files.forEach((file) => {
    console.log(file);
  })  
});

