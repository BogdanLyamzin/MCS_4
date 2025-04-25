import {Server} from "socket.io";
import {createServer} from "node:http";

const httpServer = createServer();

const wsServer = new Server(httpServer, {
    cors: {
        origin: "*"
    }
})

wsServer.on("connection", socket => {
    console.log("New frontend connected");
    socket.on("chat-message", data=> {
        socket.broadcast.emit("chat-message", data);
    })

    socket.on("disconnect", ()=> {
        console.log("Fronted close connection");
    })
})

httpServer.listen(5000);