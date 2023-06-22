import express from "express";

const router = express.Router();

import verifyJWTToken from "../middleware/verifyJWT.js";

import createPost from "../controller/user_post/createPost.js";
import fetchAllPost from "../controller/user_post/fetchAllPost.js";
// import fetchMyPost from "../controller/user_post/fetchMyPost.js";
// import deleteMyPost from "../controller/user_post/deleteMyPost.js";

router.post("/create-post", verifyJWTToken, createPost);
router.post("/fetch-all-post", verifyJWTToken, fetchAllPost);
// router.post("/fetch-my-post", verifyJWTToken, fetchMyPost);
// router.post("/delete-my-post", verifyJWTToken, deleteMyPost);

export default router;
