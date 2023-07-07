import comments_model from "../../models/comments_model.js";

const viewComments = async ( req, res ) => {
    try{
        console.log (req.query)
        let { postId } = req.query;

        let postComment = await comments_model.find({ postId , isDeleted: false});
        console.log(postComment);
        
        if (!postComment){
            return res.send ({
                code : 404,
                message : " no comments for this post ",
                payload : []
            });
        }

        return res.send({
          code: 200,
          message: "all comments fetched successfully  ",
          payload: postComment,
        });

        
    }catch (error) {
        console.log(error);
        return res.send({
            code: 500,
            message: "internal server error",
            payload: [],
        });
    }
    
}

export default viewComments;
