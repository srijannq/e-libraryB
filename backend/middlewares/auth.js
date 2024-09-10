import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { asyncHandler } from "./asyncHandler.js";
import ErrorHandler from "./ErrorHandler.js";

export const authoriseUser = asyncHandler(async (req, res, next) => {
  const token = req.cookies.authToken;
  if (!token) {
    return next(
      new ErrorHandler(
        "Please login before trying to access this resource",
        400
      )
    );
  }
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decode._id);
    req.user = user;
    next();
  } catch (e) {
    return next(new ErrorHandler("Invalid Token", 401));
  }
});
