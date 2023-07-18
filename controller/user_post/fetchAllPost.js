import post_model from "../../models/post_model.js";

const fetchAllPost = async (req, res) => {
  try {
    let array = [];

    const userAllPost = await post_model.find().limit(10).sort({ createdAt: -1 });

    for(let i = 0; i < userAllPost.length; i++) {
      let obj = {
        _id : userAllPost[i]._id,
        userId : userAllPost[i].userId,
        postTitle : userAllPost[i].postTitle,
        postDescription : userAllPost[i].postDescription,
        createdAt : userAllPost[i].createdAt,
        likes: [...new Set(userAllPost[i].likes)].length,
      }
      array.push(obj)
    }

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
