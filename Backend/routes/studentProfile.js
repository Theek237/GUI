// // routes/studentProfile.js
// import express from "express";
// import db from "../models/db.js";
// import authenticateToken from "../middleware/authenticateToken.js";

// const router = express.Router();

// router.get("/profile", authenticateToken, (req, res) => {
//   const { userauthId } = req.user;

//   const query = `
//     SELECT
//       s.StudentID,
//       s.StudentName,
//       s.StudentEmail,
//       s.StudentMobileNo,
//       a.auth_id,
//       a.email,
//       a.created_at
//     FROM auth_student a
//     JOIN student s ON a.student_id = s.StudentID
//     WHERE a.auth_id = ?
//   `;

//   db.query(query, [userauthId], (err, results) => {
//     if (err) {
//       console.error("Database error:", err);
//       return res.status(500).json({ error: "Database error", details: err });
//     }

//     if (results.length === 0) {
//       return res.status(404).json({ error: "Student not found" });
//     }

//     res.status(200).json({
//       profile: results[0],
//     });
//   });
// });

// export default router;
