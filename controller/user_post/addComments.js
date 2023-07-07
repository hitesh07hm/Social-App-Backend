import comments_model from "../../models/comments_model.js";
import post_model from "../../models/post_model.js";

const addComments = async (req, res) => {
    try {
        const { postId, comment } = req.body;
        const checkpost = await post_model.findOne({ _id : postId });
        if (!checkpost){
            return res.send ({
                code : 404,
                message : "post not available ",
                payload : []
            })
        };
        await comments_model.create ({
            postId : postId,
            userId : req.user.userId,
            comment: comment
        });

        return res.send ({
            code : 200,
            message : "comment added successfully",
            payload :[]
        });
    
    }catch{
        return res.send ({
            code : 500,
            message : "internal server error",
            payload :[]
        })
    }}

export default addComments;