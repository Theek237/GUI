import db from "../models/db.js";

export const getTeacherProfile = (req, res) => {
  const { userauthId } = req.user;

  const query = `
    SELECT 
      s.TeacherID, 
      s.TeacherName, 
      s.TeacherEmail, 
      s.TeacherMobileNo,
      a.auth_id, 
      a.email,
      a.created_at
    FROM teacher_auth a
    JOIN teacher s ON a.teacher_id = s.TeacherID
    WHERE a.auth_id = ?
  `;

  db.query(query, [userauthId], (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Database error", details: err });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: "Teacher not found" });
    }

    res.status(200).json({
      profile: results[0],
    });
  });
};
