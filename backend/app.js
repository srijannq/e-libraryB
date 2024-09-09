import express from "express";
import userRouter from "./routes/userRoutes.js";
import connectDb from "./database/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
dotenv.config({ path: "./config.env" });
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

app.use("/api/v1/user", userRouter);
connectDb();
app.use(errorMiddleware);
export default app;
