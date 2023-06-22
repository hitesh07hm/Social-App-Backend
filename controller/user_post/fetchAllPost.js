import post_model from "../../models/post_model.js";

const fetchAllPost = async (req, res) => {
  try {
    let { userName } = req.body;

    const userAllPost = await post_model
      .find({ userName: userName })
      .skip(2)
      .limit(2)
      .sort({ createdAt: 1 });
    return res.send({
      code: 200,
      message: "all posts fetched successfully  ",
      payload: userAllPost,
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

export default fetchAllPost;
