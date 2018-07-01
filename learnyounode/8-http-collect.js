const concatStream = require('concat-stream');
const http = require('http');

const url = process.argv[2];
http.get(url, (res) => {
  res.setEncoding('utf-8');
  res.pipe(concatStream((data) => {
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
  res.on('error', console.error);
}).on('error', console.error)
