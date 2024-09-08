import { User } from "../models/userModel.js";

import ErrorHandler from "../middlewares/ErrorHandler.js";
import { asyncHandler } from "../middlewares/asyncHandler.js";
const generateToken = async (user_id) => {
  try {
    const user = await User.findById(user_id);
    const jwtToken = user.generateToken();
  } catch (error) {
    throw new ErrorHandler("Something went wrong while generating token", 500);
  }
};
export const registerUser = asyncHandler(async (req, res, next) => {
  const { userName, email, password, confirmPassword } = req.body;

  if (!userName || !email || !password || !confirmPassword) {
    return next(new ErrorHandler("Please fill full form", 400));
  }
  if (password !== confirmPassword) {
    return next(
      new ErrorHandler("Password and confirm password do not match", 400)
    );
  }
  const isRegistered = await User.findOne({ userName });
  if (isRegistered) {
    return next(new ErrorHandler("User with username already registered", 400));
  }
  const isRegisteredEmail = await User.findOne({ email });
  if (isRegisteredEmail) {
    return next(new ErrorHandler("User with email already registered", 400));
  }

  await User.create({
    userName,
    email,
    password,
  });
  return res.status(200).json({
    success: true,
    message: "User successfully registered",
  });
});
export const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("Please Fill the full form", 400));
  }
  const registerUser = User.findOne({ email }).select("password");
  if (!registerUser) {
    return next(new ErrorHandler("There is no such registered email", 400));
  }
  const correctPass = await registerUser.comparePassword(password);
  const options = {
    httpOnly: true,
    secure: true,
  };
});
