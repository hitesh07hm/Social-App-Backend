import user_model from "../../models/user_model.js";

const signin = async (req,res) => {
try{
   const {email, password} = req.body
   console.log(email)
   const checkUser = await user_model.findOne({email:email})
   if (!checkUser){
    res.send ({
        code: 400,
        message : "user does not exist.",
        payload :[]
    })}
    if (checkUser.password !== password){
        res.send({
            code : 400,
            message : "password is Incorrect",
            payload : []
        })
    }
    return ({
        code : 200,
        message : "login initiated successfully",
        payload :[]
    })
} catch (error) {
    console.log(error)
    res.send({
        code: 500,
        message: "internal server error",
        payload:[]
    })
}
}

export default signin;