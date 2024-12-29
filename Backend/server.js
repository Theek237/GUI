import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

//Connect to mysql database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "lmsdb",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to the Database.");
});

//get request (Read)
app.get("/student", (req, res) => {
  const sql = "SELECT * FROM student";
  db.query(sql, (err, result) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(result);
  });
});

//post request (Create)
app.post("/student", (req, res) => {
  const sql =
    "INSERT INTO student (StudentID, StudentName, StudentEmail, StudentMobileNo) VALUES (?)";
  const values = [req.body.id, req.body.name, req.body.email, req.body.mobile];
  db.query(sql, [values], (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

//get student by id
app.get("/student/:id", (req, res) => {
  const studentId = req.params.id;
  const sql = "SELECT * FROM student WHERE StudentID = ?";
  db.query(sql, [studentId], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0)
      return res.status(404).json({ message: "Student not found" });
    return res.json(result[0]);
  });
});

app.listen(3001, () => {
  console.log("Listning");
});
