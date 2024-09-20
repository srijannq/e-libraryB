import { User } from "../models/userModel.js";

import ErrorHandler from "../middlewares/ErrorHandler.js";
import { asyncHandler } from "../middlewares/asyncHandler.js";
import axios from "axios";
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
export const registerGoogle = asyncHandler(async (req, res, next) => {
  const { token } = req.body;

  try {
    // Verify the token using Google's tokeninfo endpoint
    const ticket = await axios.get(
      `https://oauth2.googleapis.com/tokeninfo?id_token=${token.credential}`
    );

    // Extract user information from the token payload
    const payload = ticket.data;
    // const userId = payload.sub; // Google user ID

    // Now you can register or log in the user using the payload data
    const { email } = payload;
    const isRegistered = await User.findOne({
      email,
    });
    if (isRegistered) {
      return next(
        new ErrorHandler("☹️ The user already exists ! Please login")
      );
    }

    // Save the user in your database
    // For example:
    // await db.saveUser(user);
    await User.create({
      email: payload.email,
    });

    res.status(200).json({ message: "User registered successfully", user });
  } catch (error) {
    console.error("Error verifying token:", error);
    res.status(400).json({ message: "Invalid token" });
  }
});
export const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("Please Fill the full form", 400));
  }
  const registerUser = await User.findOne({ email }).select("+password");
  if (!registerUser) {
    return next(new ErrorHandler("There is no such registered email", 400));
  }
  const correctPass = await registerUser.comparePassword(password);
  if (!correctPass) {
    return next(new ErrorHandler("Invalid Password!", 400));
  }
  const options = {
    httpOnly: true,
  };
  const token = registerUser.generateJSONToken();
  res.cookie("authToken", token, options);
  res.status(200).json({
    success: true,
    message: "User successfully logged in",
    registerUser,
  });
});

export const logout = asyncHandler(async (req, res, next) => {
  res.clearCookie("authToken");
  res.status(200).json({
    success: true,
    message: "User successfully logged out",
  });
});

export const getUserDetails = asyncHandler(async (req, res, next) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    user,
  });
});
