import express from "express";
import { studentSignUp } from "../controllers/authController.js";

const router = express.Router();

router.post("/studentsignup", studentSignUp);
export default router;
