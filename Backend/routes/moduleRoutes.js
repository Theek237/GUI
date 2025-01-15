import express from "express";
import {
  getAllModules,
  //   getModuleById,
  createModule,
  updateModule,
  deleteModule,
} from "../controllers/moduleController.js";

const router = express.Router();

router.get("/", getAllModules);
router.post("/", createModule);
// router.get("/:module_id", getModuleById);
router.put("/:module_code", updateModule);
router.delete("/:module_code", deleteModule);

export default router;
