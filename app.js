const { Server } = require("socket.io");
const { createServer } = require("http");

const httpServer = createServer();

const wsServer = new Server(httpServer, {
  cors: {
    origins: "*",
  },
});

wsServer.on("connection", (socket) => {
  socket.on("chat-message", (message) => {
    socket.broadcast.emit("chat-message", message);
  });
});

httpServer.listen(5001);
