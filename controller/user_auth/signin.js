import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import user_model from "../../models/user_model.js";


const signin = async (req, res) => {
  try {
    let secretKey = process.env.secretKey;
    
    const { email, password } = req.body;

    const checkUser = await user_model.findOne({ email: email });
    if (!checkUser) {
      return res.send({
        code: 400,
        message: "user does not exist.",
        payload: [],
      });
    }

    let compare = await bcrypt.compare(password, checkUser.password);

    if (!compare) {
      return res.send({
        code: 400,
        message: "password is Incorrect",
        payload: [],
      });
    }

    let info = {
      email,
      userName: checkUser.userName,
      name: checkUser.name,
      createdAt: checkUser.createdAt,
    };

    let expiry = {
      expiresIn: "1hr",
    };

    let token = jwt.sign(info, secretKey, expiry);

    return res.send({
      code: 200,
      message: "login initiated successfully",
      payload: {
        token,
      },
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

export default signin;
