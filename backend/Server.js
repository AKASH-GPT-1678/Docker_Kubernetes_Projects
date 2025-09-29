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
import { createServer } from 'http';
import { graphqlHTTP } from "express-graphql";
import { Schema } from "./graphql/Tempserv.js";

import { root  } from "./graphql/Tempserv.js";


const server = createServer(app)
configDotenv();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const max = 5
let  current = 0

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

app.use("/graphql" , graphqlHTTP({
    schema : Schema,
    rootValue : root,
    graphiql : true
}))

// um number of allowed users

io.on("connection", (socket) => {
    
    console.log(socket.id)
  

    console.log(`User Connected: ${socket.id}`);
    current++;  // Increase the counter

    socket.on("sndmsg", (msg) => {
        console.log(msg);
        io.emit("recvmsg", `${msg} teri maa mai daal Campa Cola `);
    });


    io.emit("fulled" , `So our Dustbin ata ${"Mankholie"} is almost ${"Full"}  make sure to empty it `)

    socket.on("disconnect", () => {
        console.log(`User Disconnected: ${socket.id}`);
        current--;  // Decrease the counter when a user disconnects
    });
});


server.listen(5000, () => {
    console.log("Bhai Apna server Chalu ho gay ahai server ka port 5000")
})
