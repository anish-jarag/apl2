const net = require("net");

// Create a server
const server = net.createServer((socket) => {
  console.log("Client connected");
  socket.on("data", (data) => {
    console.log("Received:", data.toString());
  });
  socket.end("Goodbye!\n");
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
