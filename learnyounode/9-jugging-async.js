const http = require('http');
let results = [];

function promise (url){
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      res.setEncoding('utf-8');
      let str = '';
      res.on('data', (data) => {
        str += data;
      })
      res.on('end', (data) => {
        resolve(str);
      })
    })
  })
}

for(let i = 2; i < process.argv.length; i++){
  let url = process.argv[i];
  results.push(promise(url));
}
Promise
  .all(results)
  .then((strs)=>{
    // console.log(strs.length, strs);
    strs.forEach((str) => { console.log(str)})
  })