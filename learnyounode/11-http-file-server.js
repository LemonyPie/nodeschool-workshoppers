const fs = require('fs');
const http = require('http');
const port = Number(process.argv[2]);
const file = process.argv[3];

http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' })
  let src = fs.createReadStream(file);
  src.pipe(res, { end: false });
  /* src.on('end', () => { // to keep writable stream open and send some data after readavle ends
    res.end('\n');
  }) */
}).listen(port)