// import jwt, { TokenExpiredError } from "jsonwebtoken";
import jwt from "jsonwebtoken";
const verifyJWTToken = (req, res, next) => {
  try {
    let secretKey = process.env.secretKey;

    let token = req.headers.authorization;
    if (token) {
      token = token.split(" ")[1];
      let decoded = jwt.verify(token, secretKey)
      
      if (!decoded) {
        return res.send({
          code: 400,
          message: "token is invalid",
          payload: [],
        });
      }
      
      req.user = decoded;
      next();
    } else {
      return res.send({
        code: 400,
        message: "token is missing",
        payload: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.send({
      code: 500,
      message: "internal server error",
      payload: [],
    });
  }
};

export default verifyJWTToken;
