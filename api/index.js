import express from "express"
import dotenv from "dotenv";
import mongoose from "mongoose";

// Load environment variables
dotenv.config();

const app = express();

const connect = async () =>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongodb")
    }
    catch(error){
        throw error;
    }
}

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected")
})
mongoose.connection.on("connected", ()=>{
    console.log("mongoDB connected")
})

app.get("/", (req, res)=>{
    res.send("hello")
})

app.listen(5000, ()=>{
    connect();
    console.log("Connected to backend")
})