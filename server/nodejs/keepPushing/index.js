const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 8080})

wss.on('connection', function connection(ws) {
  console.log("connection opened")
});
 
const interval = setInterval(function ping() {
  console.log("connection size: ", wss.clients.size)

  wss.clients.forEach(function each(ws) {
    console.log("gogogogogoog")
    ws.send("gogogogogo") 
  })
}, 3000)
 

