import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema({
  userName: {
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
});

export default mongoose.model("post", postSchema);
