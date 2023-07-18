import otp_model from "../../models/otp_model.js";
import bcrypt from "bcrypt";
import user_model from "../../models/user_model.js";

const forgotPassword = async (req, res) => {
  try {
    let {  email , password , otp  } = req.body;

    const checkUser = await user_model.findOne({ email: email });
    if (!checkUser) {
      return res.send({
        code: 400,
        message: "user does not exist.",
        payload: [],
      });
    }
    
      let compare = await otp_model.findOne({email , otp })

      if (!compare) {
        return res.send({
          code: 400,
          message: "Invalid email or otp",
          payload: [],
        });
      }
  
    const salt = await bcrypt.genSalt(10);
    let newPassword = await bcrypt.hash(password, salt);

    
    await user_model.findOneAndUpdate({email : email },{
        password : newPassword,
    })

    return res.send({
        code : 200,
        message : "Password updated successfully",
        payload : []
    })

  } catch (error) {
    console.log(error);
    return res.send({
      code: 500,
      message: "internal server error",
      payload: [],
    });
  }
};

export default forgotPassword;
/**
 * 1. getotp api
 *      input email 
 *      genrate 6 dogit random no. 
 *      create new collection genartedotp
 *      store:- email and 6 digit otp 
 *      response genrated 6 digit no.
 * 2. forgotpassword api 
 *      input email , newpassword ,otp 
 *      add check email and 
 */