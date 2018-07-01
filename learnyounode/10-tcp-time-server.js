const net = require('net');
const port = Number(process.argv[2]);

function zeroFill(num){
  return (num < 10 ? '0' : '') + num;
}
function now(){
  let date = new Date();
  return dateFormatted =  `${date.getFullYear()}-${zeroFill(date.getMonth()+1)}-${zeroFill(date.getDate())} ${zeroFill(date.getHours())}:${zeroFill(date.getMinutes())}` // date.getFullYear() + "-" + ("0"+(date.getMonth()+1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + '\n';
}
const server = net.createServer( (socket) => {
  socket.end(now() + '\n');
})
server.listen(port);
