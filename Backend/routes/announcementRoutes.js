import express from "express";
import {
  getAllAnnouncements,
  getAnnouncementById,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
} from "../controllers/announcementController.js";

const router = express.Router();

router.get("/", getAllAnnouncements);
router.post("/", createAnnouncement);
router.get("/:announcement_id", getAnnouncementById);
router.put("/:announcement_id", updateAnnouncement);
router.delete("/:announcement_id", deleteAnnouncement);

export default router;
