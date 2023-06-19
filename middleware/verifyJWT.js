import jwt from "jsonwebtoken";

const verifyJWTToken = (req, res, next ) => {
    let secretKey = "hitesh07hm"

try{
    let token = req.headers.authorization;
    token = token.split(" ")[1];

    let decoded = jwt.verify(token, secretKey);

    if (!decoded){
        return res.send({
            code : 400,
            message : "token is invalid",
            payload :[]
        })
    }
    
    req.user = decoded
    next();
} catch (error) {
    console.log(error)
    return res.send({
        code: 500,
        message: "internal server error",
        payload:[]
    })
}
}

export default verifyJWTToken;