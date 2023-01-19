const jwt = require("jsonwebtoken");
const User = require("../../models/User");

exports.activateAccount = async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
    const checkUser = await User.findById(user.id);
    console.log(checkUser);

    if (checkUser.verified === true) {
      return res
        .status(200)
        .json({ message: "This email is already verified" });
    } else {
      await User.findByIdAndUpdate(user.id, { verified: true });
      return res.status(200).json({ message: "This email has been verified" });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};
