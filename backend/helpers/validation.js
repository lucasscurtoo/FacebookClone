const User = require("../models/User");

exports.validateUsername = async (username) => {
  let usernameUnique = false;

  do {
    const userNameExists = await User.findOne({ username });

    if (userNameExists) {
      username += (new Date() * Math.random()).toString().substring(0, 1);
      usernameUnique = true;
    } else {
      usernameUnique = false;
    }
  } while (usernameUnique);

  return username;
};
