import db from "../models/db.js";

export const getStudentProfile = (req, res) => {
  const { userauthId } = req.user;

  const query = `
    SELECT 
      s.StudentID, 
      s.StudentName, 
      s.StudentEmail, 
      s.StudentMobileNo,
      a.auth_id, 
      a.email,
      a.created_at
    FROM student_auth a
    JOIN student s ON a.student_id = s.StudentID
    WHERE a.auth_id = ?
  `;

  db.query(query, [userauthId], (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Database error", details: err });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.status(200).json({
      profile: results[0],
    });
  });
};
