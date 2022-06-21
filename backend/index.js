const express = require('express');
const cors = require('cors')
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");

const { createUser, findUser, findUsersInARoom, deleteUser } = require('./controllers/users');

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

const PORT = 5500;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json({ "message": "Hello world!" })
})

io.on('connection', (socket) => {
    // Get user and the room
    socket.on('online', ({ name, room }) => {
        const { user } = createUser({ name, room, id: socket.id });
        if (user) {
            socket.join(user.room)
        }
    })

    socket.on('sendMessage', (message) => {
        const user = findUser(socket.id);
        io.to(user.room).emit('message', { user: user.name, text: [message] })
    })

    socket.on('disconnect', () => console.log('User left the room!'))

});

server.listen(PORT, console.log(`listening on port http://localhost:${PORT}/`))
