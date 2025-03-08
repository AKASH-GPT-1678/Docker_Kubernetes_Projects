import express from "express";
const app = express();
const port = 3005;
import cors from "cors";
import "dotenv/config"
import userRoutes from "./routes/router.js"
import connectDb from "./configs/mongo.config.js";
import { configDotenv } from "dotenv";
import { Socket } from "socket.io";
import { Server } from "socket.io";
import { createServer } from 'http'


const server = createServer(app)
configDotenv();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.json());
connectDb();

app.get("/", (req, res) => {
    res.send("Hello Bhai jaan Kaise Ho ")
})

const io = new Server(server, {
    cors: {
        origin: "*",
        method: ["GET", "POST"]
    }
})
app.use("/api/users", userRoutes);


io.on("connection", (socket) => {
    console.log(socket.id);

    socket.on("sendmsg", (msg) => {
        console.log(msg);
        io.emit("rcvmsg" , msg)
    }
    )


    socket.on("disconnect" , (msg) => {
        console.log("User Disconnected" , msg)
    })

})

server.listen(5000, () => {
    console.log("Bhai Apna server Chalu ho gay ahai server ka port 5000")
})
