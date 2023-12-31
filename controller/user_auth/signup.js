import bcrypt, { genSalt } from "bcrypt";
import Joi from "joi";

import user_model from "../../models/user_model.js";

const signup = async (req, res) => {
  try {
    let { firstName, lastName, email, password } = req.body;
	
	const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });

    const { error } = schema.validate({ email , password });
    if (error) {
      return res.send({
        code: 400,
        message: "Invalid email/password",
        payload: {},
      });
    }

    // if (!/\S+@\S+\.\S+/.test(email)) {
    //   return res.send({
    //     code: 400,
    //     message: "Invalid email format",
    //     payload: {},
    //   });
    // }

    const checkUser = await user_model.findOne({ email: email });
    if (checkUser) {
      return res.send({
        code: 400,
        message: "user already exists",
        payload: {},
      });
    }

    const salt = await bcrypt.genSalt(10);
    let newPassword = await bcrypt.hash(password, salt);

    const createUser = await user_model.create({
      name: firstName + " " + lastName,
      email: email,
      password: newPassword,
    });

    return res.send({
      code: 200,
      message: "user has signed up successfully",
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

export default signup;
