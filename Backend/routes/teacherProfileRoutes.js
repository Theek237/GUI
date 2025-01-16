import express from "express";
import { getTeacherProfile } from "../controllers/teacherProfileController.js";
import authenticateToken from "../middleware/authenticateToken.js";
// const authenticateToken = require("../middleware/authenticateToken.js");
const router = express.Router();

router.get("/profile", authenticateToken, getTeacherProfile);

export default router;
