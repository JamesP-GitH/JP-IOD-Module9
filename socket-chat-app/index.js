const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

const users = {};

io.on("connection", (socket) => {
    io.emit("connection", "a user connected");

    socket.on("set nickname", (nickname) => {
        users[socket.id] = nickname;
        socket.broadcast.emit("user joined", `${nickname} has joined the chat.`);
        io.emit("online users", Object.values(users));
    });

    socket.on("chat message", (msg) => {
        const sender = users[socket.id] || "Anonymous";
        socket.broadcast.emit("chat message", { sender, msg });
        socket.emit("own message", { sender, msg });
    });

    socket.on("typing", () => {
        const sender = users[socket.id];
        socket.broadcast.emit("typing", sender);
    });

    socket.on("disconnect", () => {
        const nickname = users[socket.id];
        delete users[socket.id];
        socket.broadcast.emit("user left", `${nickname} has left the chat.`);
        io.emit("online users", Object.values(users));
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
