import db from "../models/db.js";
import bcrypt from "bcrypt";

export const studentSignUp = async (req, res) => {
  const { name, email, mobile, password, confirmpassword } = req.body;

  // Validation checks
  if (!name || !email || !mobile || !password || !confirmpassword) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (password !== confirmpassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  if (password.length < 6) {
    return res.status(400).json({ error: "Password must be at least 6 characters long" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    // Start a MySQL transaction
    db.beginTransaction(async (err) => {
      if (err) {
        return res.status(500).json({ error: "Transaction failed to start" });
      }

      try {
        // Insert into the students table
        const studentQuery =
          "INSERT INTO student (StudentName, StudentEmail, StudentMobileNo) VALUES (?, ?, ?)";
        db.query(studentQuery, [name, email, mobile], (err, result) => {
          if (err) {
            return db.rollback(() => {
              res.status(500).json({ error: "Failed to create student record" });
            });
          }

          const studentId = result.insertId;

          // Insert into the auth_student table
          const authQuery =
            "INSERT INTO student_auth (student_id, email, password_hash, created_at) VALUES (?, ?, ?, NOW())";
          db.query(
            authQuery,
            [studentId, email, hashedPassword],
            (err, result) => {
              if (err) {
                return db.rollback(() => {
                  res.status(500).json({ error: "Failed to create auth record" });
                });
              }

              // Commit the transaction
              db.commit((err) => {
                if (err) {
                  return db.rollback(() => {
                    res.status(500).json({ error: "Failed to commit transaction" });
                  });
                }
                res.status(200).json({ message: "Student registered successfully" });
              });
            }
          );
        });
      } catch (error) {
        db.rollback();
        res.status(500).json({ error: "Registration failed" });
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to hash password" });
  }
};