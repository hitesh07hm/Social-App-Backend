import user_model from "../../models/user_model.js";


const profileInfo = async (req, res) => {
  try {
    const { email } = req.user;
    const userInfo = await user_model
      .findOne({ email: email })
      .select({ email: 1, userName: 1, name: 1, createdAt: 1, _id: 0 });

    return res.send({
      code: 200,
      message: "profile info fetched successfully",
      payload: userInfo,
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

export default profileInfo;
