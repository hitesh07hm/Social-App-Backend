import mongoose from "mongoose";

const Schema = mongoose.Schema;

const likesSchema = new Schema({
  userId : {
    type : String,
    required : true,
    unique : true
  }
},{_id : false});

const postSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  postTitle: {
    type: String,
    required: true,
  },
  postDescription: {
    type: String,
    required: true,
  },
  likes: {
      type: [likesSchema]
    },
  dislikes: {
      type: [likesSchema]
    },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("post", postSchema);
