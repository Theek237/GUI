import db from "../models/db.js";

// Get all modules
export const getAllModules = (req, res) => {
  const sql = "SELECT * FROM modules";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error fetching modules:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(result);
  });
};

// Delete a module
export const deleteModule = (req, res) => {
  const { module_code } = req.params;
  const sql = "DELETE FROM modules WHERE module_code = ?";
  db.query(sql, module_code, (err, result) => {
    if (err) {
      console.error("Error deleting module:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json({ message: "Module deleted successfully" });
  });
};

// Create a module
export const createModule = (req, res) => {
  const { module_code, module_name } = req.body;
  const sql = "INSERT INTO modules (module_code, module_name) VALUES (?, ?)";
  db.query(sql, [module_code, module_name], (err, result) => {
    if (err) {
      console.error("Error creating module:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json({ message: "Module created successfully" });
  });
};
