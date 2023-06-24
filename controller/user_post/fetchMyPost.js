import post_model from "../../models/post_model.js";

const fetchMyPost = async (req, res) => {
  try {
    let {userId} = req.user;
    let {page, limit} = req.query
    page = page - 1
    page = page * limit

    const userPost = await post_model.find ({userId}).skip(page).limit(limit).sort({ createdAt: -1 });
    return res.send({
      code: 200,
      message: "all posts fetched successfully  ",
      payload: userPost,
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

export default fetchMyPost;
