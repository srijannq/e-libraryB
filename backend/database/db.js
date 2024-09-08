import mongoose from "mongoose";
import { asyncHandler } from "../middlewares/asyncHandler.js";

const connectDb = asyncHandler(async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Connected to the Database successfully");
});
export default connectDb;
