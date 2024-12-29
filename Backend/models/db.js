import mysql from "mysql";
import dbConfig from "../config/dbConfig.js";

const db = mysql.createConnection(dbConfig);

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    process.exit(1); // Exit the app if database connection fails
  }
  console.log("Connected to the Database.");
});

export default db;
