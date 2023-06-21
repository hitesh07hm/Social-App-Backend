import post_model from "../../models/post_model.js";

const fetchAllPost = async (req, res) => {
    try{
        let { firstName } = req.body;
        
        const userAllPost = await post_model
        .find({ name : firstName })
        .select({ name: 1, postTitle: 1, postDescription: 1, _id: 0 });
  
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