import express from "express";

const router = express.Router();

import signup from "../controller/user_auth/signup.js";
import signin from "../controller/user_auth/signin.js";
import profileInfo from "../controller/user_auth/profileInfo.js";
import verifyJWTToken from "../middleware/verifyJWT.js";

import getotp from "../controller/user_auth/getOtp.js";
import forgotPassword from "../controller/user_auth/forgotPassword.js";

router.post("/signup", signup)
router.post("/signin", signin)
router.get("/get-profile-info", verifyJWTToken, profileInfo)

router.post("/get-otp", getotp)
router.post("/forgot-password", forgotPassword)
export default router;