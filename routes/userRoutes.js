import express from "express";
import signup from "../controller/user_auth/signup.js";
import signin from "../controller/user_auth/signin.js";

const router = express.Router();
router.post("/signup", signup)
router.post("/signin", signin)

export default router;