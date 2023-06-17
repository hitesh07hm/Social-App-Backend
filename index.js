import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import userRoutes from "./routes/userRoutes.js"

const app = express ()
app.use(bodyParser.json());

let mongooseDbConnectionURI = "mongodb+srv://ProjectSocial07:07SocialProject9168@projectsocial.bkbcyxp.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongooseDbConnectionURI,{ useNewUrlParser: true, useUnifiedTopology: true} ).then(() => {
    console.log("connected to mongoose")
}).catch ((error) => {
    console.log("failed while connecting mango")
})


app.use("/user",userRoutes)

app.listen(3000)