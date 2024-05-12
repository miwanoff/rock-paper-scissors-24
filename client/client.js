console.log("client.js loaded");
const socket = io();
let roomUniqueId = null;

function сreateGame() {
  socket.emit("createGame");
}

function joinGame() {
  roomUniqueId = document.getElementById('roomUniqueId').value;
  console.log(roomUniqueId);
  socket.emit('joinGame', {roomUniqueId: roomUniqueId});
}

socket.on("newGame", (data) => {
  roomUniqueId = data.roomUniqueId;
});

