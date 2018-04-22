var ws = require("nodejs-websocket")
var PORT = 3000
var clientCount = 0

var server = ws.createServer(function (conn) {
  console.log("New connection")
  clientCount++
  conn.nickname = 'user' + clientCount
  broadcast(conn.nickname + " comes in", 'system')

  conn.on("text", function (str) {
    console.log("Received " + str);
    broadcast(str, conn.nickname);
  })

  conn.on("close", function (code, reason) {
    console.log("Connection closed")
    broadcast(conn.nickname + " left", 'system')
  })

  conn.on("error", function (err) {
    console.log("Handle Error");
    console.log(err);
  })
}).listen(PORT)
console.log("websocket listening on port:" + PORT)

function broadcast(str,nickname) {
  server.connections.forEach(function (connection) {
    connection.sendText(JSON.stringify({
      message: str,
      id: nickname
    }))
  });
}