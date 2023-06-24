import post_model from "../../models/post_model.js";

const createPost = async (req, res) => {
  try {
    let { postTitle, postDescription } = req.body;
    let { userId } = req.user;

    await post_model.create({
      userId: userId,
      postTitle: postTitle,
      postDescription: postDescription,
    });

    return res.send({
      code: 200,
      message: "new Post created successfully ",
      payload: [],
    });
  } catch (error) {
    console.log(error);
    return res.send({
      code: 500,
      message: "internal server error",
      payload: [],
    });
  }
};

export default createPost;
