import express from "express";
import {
  getUserDetails,
  loginUser,
  logout,
  registerGoogle,
  registerUser,
} from "../controller/userController.js";
import { authoriseUser } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/register/google", registerGoogle);
router.get("/logout", authoriseUser, logout);
router.get("/getuser", authoriseUser, getUserDetails);

export default router;
