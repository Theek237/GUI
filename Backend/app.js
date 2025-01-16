import express from "express";
import cors from "cors";
import studentRoutes from "./routes/studentRoutes.js";
import announcementRoutes from "./routes/announcementRoutes.js";
import moduleRoutes from "./routes/moduleRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import studentProfileRoutes from "./routes/studentProfileRoutes.js";
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/student", studentRoutes);
app.use("/api/announcement", announcementRoutes);
app.use("/api/module", moduleRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/studentprofile",studentProfileRoutes);

export default app;
