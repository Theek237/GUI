import db from "../models/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const jwteduverse = "jwteduverse";

//STUDENT----------------------------------------------------------------------

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
    return res
      .status(400)
      .json({ error: "Password must be at least 6 characters long" });
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
              res
                .status(500)
                .json({ error: "Failed to create student record" });
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
                  res
                    .status(500)
                    .json({ error: "Failed to create auth record" });
                });
              }

              // Commit the transaction
              db.commit((err) => {
                if (err) {
                  return db.rollback(() => {
                    res
                      .status(500)
                      .json({ error: "Failed to commit transaction" });
                  });
                }
                res
                  .status(200)
                  .json({ message: "Student registered successfully" });
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

export const studentSignIn = async (req, res) => {
  console.log("Received request body:", req.body); // Add this line

  const { email, password } = req.body;

  // Basic validation checks
  if (!email || !password) {
    console.log("Validation failed:", { email, password }); // Add this line

    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Check if the user exists in the student_auth table
    const checkQuery = "SELECT * FROM student_auth WHERE email = ?";
    db.query(checkQuery, [email], async (err, results) => {
      if (err) {
        return res.status(500).json({ error: "Database error" });
      }

      // If no user record is found
      if (results.length === 0) {
        return res.status(400).json({ error: "Invalid email or password" });
      }

      const user = results[0];
      console.log("User found:", user);
      // Compare the hashed password with the entered password
      const match = await bcrypt.compare(password, user.password_hash);
      if (!match) {
        return res.status(400).json({ error: "Invalid email or password" });
      }
      // Create a JWT with user ID or any other relevant payload
      const token = jwt.sign(
        { userauthId: user.auth_id }, // payload (store minimal user info)
        jwteduverse, // secret key
        { expiresIn: "6h" } // token expiration time
      );

      // If passwords match, respond with success
      res.status(200).json({ message: "Login successful", token: token });
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

//TEACHER----------------------------------------------------------------------
export const teacherSignUp = async (req, res) => {
  const { name, email, mobile, password, confirmpassword } = req.body;

  // Validation checks
  if (!name || !email || !mobile || !password || !confirmpassword) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (password !== confirmpassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ error: "Password must be at least 6 characters long" });
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
        const teacherQuery =
          "INSERT INTO teacher (TeacherName, TeacherEmail, TeacherMobileNo) VALUES (?, ?, ?)";
        db.query(teacherQuery, [name, email, mobile], (err, result) => {
          if (err) {
            return db.rollback(() => {
              res
                .status(500)
                .json({ error: "Failed to create Teacher record" });
            });
          }

          const teacherId = result.insertId;

          // Insert into the auth_student table
          const authQuery =
            "INSERT INTO teacher_auth (teacher_id, email, password_hash, created_at) VALUES (?, ?, ?, NOW())";
          db.query(
            authQuery,
            [teacherId, email, hashedPassword],
            (err, result) => {
              if (err) {
                return db.rollback(() => {
                  res
                    .status(500)
                    .json({ error: "Failed to create auth record" });
                });
              }

              // Commit the transaction
              db.commit((err) => {
                if (err) {
                  return db.rollback(() => {
                    res
                      .status(500)
                      .json({ error: "Failed to commit transaction" });
                  });
                }
                res
                  .status(200)
                  .json({ message: "Teacher registered successfully" });
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

export const teacherSignIn = async (req, res) => {
  console.log("Received request body:", req.body);

  const { email, password } = req.body;

  // Basic validation checks
  if (!email || !password) {
    console.log("Validation failed:", { email, password });

    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Check if the user exists in the student_auth table
    const checkQuery = "SELECT * FROM teacher_auth WHERE email = ?";
    db.query(checkQuery, [email], async (err, results) => {
      if (err) {
        return res.status(500).json({ error: "Database error" });
      }

      // If no user record is found
      if (results.length === 0) {
        return res.status(400).json({ error: "Invalid email or password" });
      }

      const user = results[0];
      console.log("User found:", user);
      // Compare the hashed password with the entered password
      const match = await bcrypt.compare(password, user.password_hash);
      if (!match) {
        return res.status(400).json({ error: "Invalid email or password" });
      }
      // Create a JWT with user ID or any other relevant payload
      const token = jwt.sign(
        { userauthId: user.auth_id }, // payload (store minimal user info)
        jwteduverse, // secret key
        { expiresIn: "6h" } // token expiration time
      );

      // If passwords match, respond with success
      res.status(200).json({ message: "Login successful", token: token });
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
