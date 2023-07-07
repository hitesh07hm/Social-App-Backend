import post_model from "../../models/post_model.js";

const likeAPost = async (req, res) => {
    const { postId } = req.body;
  
    let post;
    try {
      post = await post_model.findById(postId);
      if (!post) {
        return res.send({
          code: 404,
          message: "Post not found",
          payload: {},
        });
      }
  
      if (post_model.findOne({postId, likes:true})) {
        return res.send({
          code: 400,
          message: "You have already liked this post",
          payload: {},
        });
      }
      
    } catch (error) {
      console.log(error);
      return res.send({
        code: 500,
        message: "Internal server error",
        payload: [],
      });
    }
  
    return res.send({
      code: 200,
      message: "Post liked successfully",
      payload: {},
    });
  };
  
  export { likeAPost };