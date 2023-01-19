const User = require("../../models/User");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const { generateToken } = require("../../helpers/token");

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

exports.login = async (req, res) => {
  const { error } = userSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      error: "Login error",
      message: error.details[0].message,
    });
  }
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: "Incorrect Email" });

  const checkUserPassword = await bcrypt.compare(password, user.password);
  if (!checkUserPassword)
    return res.status(400).json({ error: "Incorrect Password" });

  const token = generateToken({ id: user._id.toString() }, "7d");
  res.send({
    id: user._id,
    username: user.username,
    picture: user.picture,
    first_name: user.first_name,
    last_name: user.last_name,
    token: token,
    verified: user.verified,
  });
};
