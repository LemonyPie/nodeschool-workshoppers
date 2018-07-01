const fs = require('fs');
const path = require('path');

module.exports = function (dir, ext, callback){
 fs.readdir(dir, (err, list) => {
    if(err){  return callback(err);  }

    let filteredList = list.filter((filename) => {
      return path.extname(filename) == `.${ext}`;
    })

    callback(null, filteredList);
  })
}