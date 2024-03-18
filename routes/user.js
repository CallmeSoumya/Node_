import express, { Router } from "express";
import {
  login,
  register,
  getMyProfile,
  logout,
} from "../controllers/user.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();




router.post("/new", register);

router.post("/login", login);

router.get("/logout", logout);


router.get("/me", isAuthenticated, getMyProfile);

export default router;
