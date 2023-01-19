const express = require("express");
const { activateAccount } = require("../controllers/auth/activateAccount");
const { login } = require("../controllers/auth/login");
const { register } = require("../controllers/auth/register");

const auth = express.Router();

auth.post("/register", register);
auth.post("/activateAccount", activateAccount);
auth.post("/login", login);

module.exports = auth;
