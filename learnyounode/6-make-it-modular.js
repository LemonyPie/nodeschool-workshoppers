const filterLs = require('./6-make-it-modular-module');

filterLs(process.argv[2], process.argv[3], printLs);

function printLs (err, data) {
  if(err){ throw new Error(err) }

  data.forEach((file) => {
    console.log(file);
  })
}