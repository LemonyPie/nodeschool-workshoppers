const http = require('http');
const url = require('url');
const port = process.argv[2];

function parsetime(time){
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime(time){
  return {
    unixtime: time.getTime()
  }
}
http.createServer( (req, res) => {  
  let urlParsed = url.parse(req.url, true),
      route = urlParsed.pathname,
      query = urlParsed.query,
      date = new Date(query.iso),
      result;
  switch(route){
    case '/api/unixtime':
      result = unixtime(date);
      break;
    case '/api/parsetime':
      result = parsetime(date);
      break;
  }
  if (result){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
}).listen(port)