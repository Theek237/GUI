import express from "express";
import { getStudentProfile } from "../controllers/studentProfileController.js";
import authenticateToken from "../middleware/authenticateToken.js";
// const authenticateToken = require("../middleware/authenticateToken.js");
const router = express.Router();

router.get("/profile", authenticateToken, getStudentProfile);

export default router;
