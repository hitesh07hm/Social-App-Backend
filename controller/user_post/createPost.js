import post_model from "../../models/post_model.js";

const createPost = async (req, res) => {
  try {
    let { userName, postTitle, postDescription } = req.body;

    const createUserPost = await post_model.create({
      userName: userName,
      postTitle: postTitle,
      postDescription: postDescription,
    });

    return res.send({
      code: 200,
      message: "new Post created successfully ",
      payload: createUserPost,
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
