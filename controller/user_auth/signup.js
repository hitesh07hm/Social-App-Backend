import user_model from "../../models/user_model.js";

const signup = async (req,res) => {
try{
    console.log(req.body)
    let inputData= req.body

    const checkUser = await user_model.findOne({email:inputData.email})
    if(checkUser){
        return res.send({
            code :400,
            message: "user already exists",
            payload:{}
        })
    }

    const createUser = await user_model.create({
        name: inputData.firstName + " " + inputData.lastName,
        email: inputData.email,
        password: inputData.password
    })

    return res.send({
        code:200,
        message:"user has signed up successfully",
        payload:[]
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

export default signup;