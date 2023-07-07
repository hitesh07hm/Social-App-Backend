import post_model from "../../models/post_model.js";

const likeAPost = async (req, res) => {
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

    if (post.dislikes.find((dislike) => dislike.userId === userId)) {
      await post_model.findOneAndUpdate(
        { _id: postId },
        { $pull: { dislikes: { userId } } },
      );

      await post_model.findOneAndUpdate(
        { _id: postId },
        { $push: { likes: { userId } } },
      );
      return res.send({
        code: 200,
        message: "Post liked successfully",
        payload: {},
      });
    } else if (post.likes.find((like) => like.userId === userId)) {
      await post_model.findOneAndUpdate(
        { _id: postId },
        { $pull: { likes: { userId } } }
      );
      return res.send({
        code: 200,
        message: "like from the post has been removed successfully",
        payload: {},
      });
    } else {
      await post_model.findOneAndUpdate(
        { _id: postId },
        { $push: { likes: { userId } } }
      );
      return res.send({
        code: 200,
        message: "Post liked successfully",
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

export { likeAPost };

// import post_model from "../../models/post_model.js";

// const likeAPost = async (req, res) => {
//     const { postId } = req.body;
//     const { userId } =req.user;
  
//     try {
//       const post = await post_model.findById(postId);
//       if (!post) {
//         return res.send({
//           code: 404,
//           message: "Post not found",
//           payload: {},
//         });
//       }
  
//       if (post.likes.find((like) => like.userId === userId)) {
//         return res.send({
//           code: 400,
//           message: "You have already liked this post",
//           payload: {},
//         });
//       }
      
//       await post_model.findOneAndUpdate({_id : postId}, {
//         $push : {
//           likes : {
//             userId : userId,
//         }}
//       });
      
//       return res.send({
//         code: 200,
//         message: "Post liked successfully",
//         payload: {},
//       });
//     } catch (error) {
//       console.log(error);
//       return res.send({
//         code: 500,
//         message: "Internal server error",
//         payload: [],
//       });
//     }
  
//   };
  
//   export { likeAPost };