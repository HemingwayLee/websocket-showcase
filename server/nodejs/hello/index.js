const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 8080})

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message)
    const num = parseFloat(message)
    if (num > 0.6) {
      console.log('pass')
      ws.send('pass')
    } else {
      console.log('fail')
      ws.send('fail')
    } 
  });
 
  ws.send('something');
});


