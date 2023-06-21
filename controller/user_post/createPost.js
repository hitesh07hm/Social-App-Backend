import post_model from "../../models/post_model.js";

const createPost = async (req, res) => {
    try{
        let { firstName, postTitle, postDescription } = req.body;
        
        const createUserPost = await post_model.create({
            name: firstName,
            postTitle: postTitle,
            postDescription: postDescription,
          });
          console.log(createUserPost);
  
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