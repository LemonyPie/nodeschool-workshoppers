const fs = require('fs');

let input = fs.readFileSync(process.argv[2]).toString();

console.log(input.split('\n').length - 1);
