import db from "../models/db.js";
import bcrypt from "bcrypt";

// Get all students
export const getAllStudents = (req, res) => {
  const sql = "SELECT * FROM student";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ message: "Error inside server" });
    res.json(result);
  });
};

// Create a new student
export const createStudent = async (req, res) => {
  const { studentID, studentName, studentEmail, studentMobileNo } = req.body;

  // Default password for students created by teachers
  const defaultPassword = "123456";

  try {
    const hashedPassword = await bcrypt.hash(defaultPassword, 10);

    // Start a MySQL transaction
    db.beginTransaction((err) => {
      if (err) {
        return res
          .status(500)
          .json({ error: "Transaction failed to start", err });
      }

      // Insert into the student table
      const studentQuery =
        "INSERT INTO student (StudentID, StudentName, StudentEmail, StudentMobileNo) VALUES (?, ?, ?, ?)";
      const studentValues = [
        studentID,
        studentName,
        studentEmail,
        studentMobileNo,
      ];
      db.query(studentQuery, studentValues, (err, result) => {
        if (err) {
          return db.rollback(() => {
            res
              .status(500)
              .json({ error: "Failed to create student record", err });
          });
        }

        // Insert into the student_auth table
        const authQuery =
          "INSERT INTO student_auth (student_id, email, password_hash, created_at) VALUES (?, ?, ?, NOW())";
        const authValues = [studentID, studentEmail, hashedPassword];
        db.query(authQuery, authValues, (err, result) => {
          if (err) {
            return db.rollback(() => {
              res
                .status(500)
                .json({ error: "Failed to create auth record", err });
            });
          }

          // Commit the transaction
          db.commit((err) => {
            if (err) {
              return db.rollback(() => {
                res
                  .status(500)
                  .json({ error: "Failed to commit transaction", err });
              });
            }
            res.status(201).json({ message: "Student created successfully" });
          });
        });
      });
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to hash password", error });
  }
};

// Get a single student by ID
export const getStudentById = (req, res) => {
  const studentId = req.params.id;
  const sql = "SELECT * FROM student WHERE StudentID = ?";
  db.query(sql, [studentId], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0)
      return res.status(404).json({ message: "Student not found" });
    res.json(result[0]);
  });
};

// **UPDATE** - Update a student's details
export const updateStudent = (req, res) => {
  const studentId = req.params.id;
  const { name, email, mobile } = req.body;

  // SQL queries to update both tables
  const updateStudentSql =
    "UPDATE student SET StudentName = ?, StudentEmail = ?, StudentMobileNo = ? WHERE StudentID = ?";
  const updateStudentAuthSql =
    "UPDATE student_auth SET email = ? WHERE student_id = ?";

  // Start a MySQL transaction
  db.beginTransaction((err) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Transaction failed to start", err });
    }

    // Update the student table
    db.query(
      updateStudentSql,
      [name, email, mobile, studentId],
      (err, result) => {
        if (err) {
          return db.rollback(() => {
            res
              .status(500)
              .json({ message: "Failed to update student record", err });
          });
        }

        if (result.affectedRows === 0) {
          return db.rollback(() => {
            res.status(404).json({ message: "Student not found" });
          });
        }

        // Update the student_auth table
        db.query(updateStudentAuthSql, [email, studentId], (err, result) => {
          if (err) {
            return db.rollback(() => {
              res
                .status(500)
                .json({ message: "Failed to update auth record", err });
            });
          }

          // Commit the transaction
          db.commit((err) => {
            if (err) {
              return db.rollback(() => {
                res
                  .status(500)
                  .json({ message: "Failed to commit transaction", err });
              });
            }
            res.status(200).json({ message: "Student updated successfully" });
          });
        });
      }
    );
  });
};

// **DELETE** - Remove a student
export const deleteStudent = (req, res) => {
  const studentId = req.params.id;

  // SQL queries to delete from both tables
  const deleteStudentSql = "DELETE FROM student WHERE StudentID = ?";
  const deleteStudentAuthSql = "DELETE FROM student_auth WHERE student_id = ?";

  // Start a MySQL transaction
  db.beginTransaction((err) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Transaction failed to start", err });
    }

    // Delete from student_auth table first
    db.query(deleteStudentAuthSql, [studentId], (err, result) => {
      if (err) {
        return db.rollback(() => {
          res
            .status(500)
            .json({ message: "Failed to delete from student_auth", err });
        });
      }

      // Proceed to delete from student table
      db.query(deleteStudentSql, [studentId], (err, result) => {
        if (err) {
          return db.rollback(() => {
            res
              .status(500)
              .json({ message: "Failed to delete from student", err });
          });
        }

        if (result.affectedRows === 0) {
          return db.rollback(() => {
            res.status(404).json({ message: "Student not found" });
          });
        }

        // Commit the transaction
        db.commit((err) => {
          if (err) {
            return db.rollback(() => {
              res
                .status(500)
                .json({ message: "Failed to commit transaction", err });
            });
          }
          res.status(200).json({ message: "Student deleted successfully" });
        });
      });
    });
  });
};
