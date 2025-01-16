import express from "express";
import { studentSignUp,studentSignIn,teacherSignIn,teacherSignUp } from "../controllers/authController.js";

const router = express.Router();

router.post("/studentsignup", studentSignUp);
router.post("/studentsignin", studentSignIn);
router.post("/teachersignup", teacherSignUp);
router.post("/teachersignin", teacherSignIn);
export default router;
