import post_model from "../../models/post_model.js";

const dislikeAPost = async (req, res) => {
  const { postId } = req.body;
  const { userId } = req.user;

  try {
    const post = await post_model.findById(postId);
    if (!post) {
      return res.send({
        code: 404,
        message: "Post not found",
        payload: {},
      });
    }

    if (post.likes.find((like) => like.userId === userId)) {
      await post_model.findOneAndUpdate(
        { _id: postId },
        { $pull: { likes: { userId } } },
      );

      await post_model.findOneAndUpdate(
        { _id: postId },
        { $push: { dislikes: { userId } } },
      );
      return res.send({
        code: 200,
        message: "Post disliked successfully",
        payload: {},
      });
    } else if (post.dislikes.find((dislike) => dislike.userId === userId)) {
      await post_model.findOneAndUpdate(
        { _id: postId },
        { $pull: { dislikes: { userId } } }
      );
      return res.send({
        code: 200,
        message: "dislike from the post has been removed successfully",
        payload: {},
      });
    } else {
      await post_model.findOneAndUpdate(
        { _id: postId },
        { $push: { dislikes: { userId } } }
      );
      return res.send({
        code: 200,
        message: "Post disliked successfully",
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
};

export { dislikeAPost };
