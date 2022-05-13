const User = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const comparePassword = (loginPassword, userPassword) =>
  bcrypt.compare(loginPassword, userPassword);

const createJWT = (user) => {
  return jwt.sign(
    { userId: user._id, username: user.username },
    process.env.JWT_SECRET
  );
};

const register = async (req, res, next) => {
  try {
    const { password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({ ...req.body, password: hashedPassword });
    const token = createJWT(user);

    res
      .status(StatusCodes.OK)
      .json({ user: { username: user.username, id: user._id }, token });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { password, username } = req.body;

    if (!password) {
      throw new BadRequestError("Please provide email and password");
    }
    const user = await User.findOne({ username });
    if (!user) throw new UnauthenticatedError("Invalid Credentials");

    if (!(await comparePassword(password, user.password)))
      throw new UnauthenticatedError("Invalid Credentials");

    const token = createJWT(user);
    res
      .status(StatusCodes.OK)
      .json({ user: { username: user.username, id: user._id }, token });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login, comparePassword };
