const http = require('http');
const map = require('through2-map');
const port = process.argv[2];
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  if( req.method !== 'POST'){
    return res.end('Only POST is accepted');
  }
  
  req
    .pipe(map( (chunk) => chunk.toString().toUpperCase() ) )
    .pipe(res);
  
}).listen(port);