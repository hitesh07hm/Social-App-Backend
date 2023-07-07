import post_model from "../../models/post_model.js";

const deleteMyPost = async (req, res) => {
  try {
    console.log(req.query);
    let { postId } = req.query;
    let { userId } = req.user;

    let postData = await post_model.findOne({ _id: postId });
    console.log(postData);

    if (!postData) {
      return res.send({
        code: 400,
        message: "Post does not exists",
        payload: [],
      });
    }
    if (postData.userId !== userId) {
      return res.send({
        code: 400,
        message: "you dont have authorization to delete this post",
        payload: [],
      });
    }

    await post_model.findByIdAndDelete({_id: postId });
    return res.send({
      code: 200,
      message: "Post deleted successfully",
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

export default deleteMyPost;
