import express from "express";

const router = express.Router();

import verifyJWTToken from "../middleware/verifyJWT.js";

import createPost from "../controller/user_post/createPost.js";
import fetchAllPost from "../controller/user_post/fetchAllPost.js";
import fetchMyPost from "../controller/user_post/fetchMyPost.js";
import deleteMyPost from "../controller/user_post/deleteMyPost.js";

import addComment from "../controller/user_post/addComments.js";
import viewComments from "../controller/user_post/viewComments.js";

import { likeAPost } from "../controller/user_post/likeAPost.js";
import { dislikeAPost } from "../controller/user_post/dislikeAPost.js";

router.post("/create-post", verifyJWTToken, createPost);
router.get("/fetch-all-post", verifyJWTToken, fetchAllPost);
router.get("/fetch-my-post", verifyJWTToken, fetchMyPost);
router.get("/delete-my-post", verifyJWTToken, deleteMyPost);

router.post("/add-comment", verifyJWTToken, addComment)
router.get("/view-comments", verifyJWTToken, viewComments)

router.post("/like-a-post", verifyJWTToken, likeAPost)
router.post("/dislike-a-post", verifyJWTToken, dislikeAPost)

export default router;
