console.log("client.js loaded");
const socket = io();

function сreateGame() {
  socket.emit("createGame");
}
