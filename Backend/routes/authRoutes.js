import express from "express";
import { studentSignUp,studentSignIn } from "../controllers/authController.js";

const router = express.Router();

router.post("/studentsignup", studentSignUp);
router.post("/studentsignin", studentSignIn);
export default router;
