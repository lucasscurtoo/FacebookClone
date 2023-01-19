const User = require("../../models/User");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const { validateUsername } = require("../../helpers/validation");
const { generateToken } = require("../../helpers/token");
const { sendVerificationEmail } = require("../../helpers/mailer");

const userSchema = Joi.object({
  first_name: Joi.string().required().min(3).max(10),
  last_name: Joi.string().required().min(3).max(10),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6).max(20),
  username: Joi.string(),
  bYear: Joi.string().required(),
  bMonth: Joi.string().required(),
  bDay: Joi.string().required(),
  gender: Joi.string().required(),
});

exports.register = async (req, res) => {
  const { error } = userSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      error: "Validation error",
      message: error.details[0].message,
    });
  }

  const { email, first_name, last_name, username } = req.body;

  const emailExists = await User.findOne({ email });

  if (emailExists)
    return res.status(400).json({ error: "Email is already registered" });

  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const tempUser = first_name + last_name;
  const newUser = await validateUsername(tempUser);

  try {
    const user = await new User({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email,
      password: hashedPassword,
      username: username ? username : newUser,
      bYear: req.body.bYear,
      bMonth: req.body.bMonth,
      bDay: req.body.bDay,
      gender: req.body.gender,
    }).save();

    const emailVerificationToken = generateToken(
      { id: user._id.toString() },
      "30m"
    );
    const url = `${process.env.BASE_URL}/activate/${emailVerificationToken}`;
    sendVerificationEmail(user.email, user.first_name, url);

    const token = generateToken({ id: user._id.toString() }, "7d");
    res.send({
      id: user._id,
      username: user.username,
      picture: user.picture,
      first_name: user.first_name,
      last_name: user.last_name,
      token: token,
      verified: user.verified,
      message: "Register Success ! please activate your email to start",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
