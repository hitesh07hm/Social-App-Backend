import otp_model from "../../models/otp_model.js";
import user_model from "../../models/user_model.js";

const getOtp = async (req, res) => {
  try {
    let {  email  } = req.body;

    const checkUser = await user_model.findOne({ email: email });
    if (!checkUser) {
      return res.send({
        code: 400,
        message: "email does not exist.",
        payload: [],
      });
    }
    
    let generatedOtp = Math.floor(Math.random() * 900000) + 100000;

    
    await otp_model.create({
        email: email,
        otp : generatedOtp,
      });
  
    return res.send({
        code : 200,
        message : "Otp generated successfully",
        payload :[generatedOtp]
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

export default getOtp;