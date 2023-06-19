import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"

const app = express ()
app.use(bodyParser.json());

import userRoutes from "./routes/userRoutes.js"


let mongooseDbConnectionURI = "mongodb+srv://ProjectSocial07:07SocialProject9168@projectsocial.bkbcyxp.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongooseDbConnectionURI,{ useNewUrlParser: true, useUnifiedTopology: true} ).then(() => {
    console.log("connected to mongoose")
}).catch ((error) => {
    console.log("failed while connecting mango", error)
})


app.use("/user",userRoutes)

app.listen(3000)