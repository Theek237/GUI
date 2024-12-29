import db from "../models/db.js";

// Get all students
export const getAllStudents = (req, res) => {
  const sql = "SELECT * FROM student";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ message: "Error inside server" });
    res.json(result);
  });
};

// Create a new student
export const createStudent = (req, res) => {
  const sql =
    "INSERT INTO student (StudentID, StudentName, StudentEmail, StudentMobileNo) VALUES (?)";
  const values = [req.body.id, req.body.name, req.body.email, req.body.mobile];
  db.query(sql, [values], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json(result);
  });
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
  const sql =
    "UPDATE student SET StudentName = ?, StudentEmail = ?, StudentMobileNo = ? WHERE StudentID = ?";
  db.query(sql, [name, email, mobile, studentId], (err, result) => {
    if (err) return res.status(500).json({ message: "Database Error", err });
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Student not found" });
    return res.status(200).json({ message: "Student updated successfully" });
  });
};

// **DELETE** - Remove a student
export const deleteStudent = (req, res) => {
  const studentId = req.params.id;
  const sql = "DELETE FROM student WHERE StudentID = ?";
  db.query(sql, [studentId], (err, result) => {
    if (err) return res.status(500).json({ message: "Database Error", err });
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Student not found" });
    return res.status(200).json({ message: "Student deleted successfully" });
  });
};
