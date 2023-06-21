import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"

import dotenv from "dotenv"
dotenv.config();


const app = express ();
app.use(bodyParser.json());

import userRoutes from "./routes/userRoutes.js"


let mongooseDbConnectionURI = process.env.mongodbconnectionURI
mongoose.connect(mongooseDbConnectionURI,{ useNewUrlParser: true, useUnifiedTopology: true} ).then(() => {
    console.log("connected to mongoose")
}).catch ((error) => {
    console.log("failed while connecting mango", error)
})


app.use("/user",userRoutes)

app.listen(3000)