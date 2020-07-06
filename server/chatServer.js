const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const PORT = process.env.PORT || 5000;
const { addUser, getUser, getUsersInRoom, removeUser } = require("./users");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  console.log("New Connection...");

  socket.on("join", ({ name, room }, callback) => {
    //console.log("Here", name, room);
    const { error, user } = addUser({ id: socket.id, name: name, room: room });
    if (error) {
      return callback(error);
    }

    socket.emit("message", {
      user: "admin",
      text: `Welcome To Room ${user.room} `,
    });
    socket.broadcast.to(user.room).emit("message", {
      user: "admin",
      text: `${user.name} is Online  `,
    });

    socket.join(user.room);
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);
    console.log(user);
    io.to(user.room).emit("message", { user: user.name, text: message });
    callback();
  });

  socket.on("disconnect", () => {
    console.log("User Left");
  });
});

server.listen(PORT, () => console.log("Listening to Port "));
