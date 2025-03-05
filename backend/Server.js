import express from "express";
const app = express()
const port = 3005;
import cors from "cors";
import "dotenv/config"
import userRoutes from "./routes/router.js"
import connectDb from "./configs/mongo.config.js";
import { configDotenv } from "dotenv";


// const express = require('express')
configDotenv();

app.use(cors())
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// app.use(express.json());
connectDb();

app.get("/" , (req, res) => {
    res.send("Hello Bhai jaan Kaise Ho ")
})


app.use("/api/users" , userRoutes);
// router.



app.listen(5000 , () => {
    console.log("Bhai Apna server Chalu ho gay ahai server ka port 5000")
})