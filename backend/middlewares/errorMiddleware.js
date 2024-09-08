import ErrorHandler from "./ErrorHandler.js";
export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;
  if (err.name === "JSONWebTokenError") {
    const message = "JSON Web Token is invalid. Try Again!!!";
    err = new ErrorHandler(message, 400);
  }
  if (err.name === "TokenExpiredError") {
    const message = "Token Expired! Try again";
    err = new ErrorHandler(message, 400);
  }
  const errorMessages = err.errors
    ? Object.values(err.errors)
        .map((error) => error.message)
        .join(" ")
    : err.message;
  return res.status(err.statusCode).json({
    success: false,
    message: errorMessages,
  });
};
