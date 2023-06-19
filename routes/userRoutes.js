import express from "express";

const router = express.Router();

import signup from "../controller/user_auth/signup.js";
import signin from "../controller/user_auth/signin.js";
import profileInfo from "../controller/user_auth/profileInfo.js";
import verifyJWTToken from "../middleware/verifyJWT.js";

router.post("/signup", signup)
router.post("/signin", signin)
router.get("/get-profile-info", verifyJWTToken, profileInfo)

export default router;