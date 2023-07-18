import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(bodyParser.json());

import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";

let mongooseDbConnectionURI = process.env.mongodbconnectionURI;
mongoose
  .connect(mongooseDbConnectionURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to mongoose");
  })
  .catch((error) => {
    console.log("failed while connecting mongo", error);
  });

app.use("/user", userRoutes);
app.use("/post", postRoutes);

app.listen(3000);
