import db from "../models/db.js";

// Get all announcements
export const getAllAnnouncements = (req, res) => {
  const sql = "SELECT * FROM announcements";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error fetching announcements:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(result);
  });
};

// Create a new announcement with validation
export const createAnnouncement = (req, res) => {
  const { announcement_id, announcement_title, announcement_content } =
    req.body;

  // Validation: Check for required fields
  if (!announcement_id || !announcement_title || !announcement_content) {
    console.error("Validation Error: Missing required fields.");
    return res
      .status(400)
      .json({
        error:
          "All fields are required: announcement_id, announcement_title, announcement_content.",
      });
  }

  const sql =
    "INSERT INTO announcements (announcement_id, announcement_title, announcement_content) VALUES (?, ?, ?)";

  const values = [announcement_id, announcement_title, announcement_content];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Database Insertion Error:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res
      .status(201)
      .json({ message: "Announcement created successfully.", result });
  });
};

// Get a single announcement by ID
export const getAnnouncementById = (req, res) => {
  const announcement_id = req.params.announcement_id;
  const sql = "SELECT * FROM announcements WHERE announcement_id = ?";
  db.query(sql, [announcement_id], (err, result) => {
    if (err) {
      console.error("Error fetching announcement:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (result.length === 0) {
      console.warn(`Announcement with ID ${announcement_id} not found.`);
      return res.status(404).json({ message: "Announcement not found" });
    }
    res.json(result[0]);
  });
};

// Update an announcement
export const updateAnnouncement = (req, res) => {
  const announcement_id = req.params.announcement_id;
  const { announcement_title, announcement_content } = req.body;

  // Validation: Check for required fields
  if (!announcement_title || !announcement_content) {
    console.error("Validation Error: Missing title or content.");
    return res
      .status(400)
      .json({
        error: "Both announcement_title and announcement_content are required.",
      });
  }

  const sql =
    "UPDATE announcements SET announcement_title = ?, announcement_content = ? WHERE announcement_id = ?";

  db.query(
    sql,
    [announcement_title, announcement_content, announcement_id],
    (err, result) => {
      if (err) {
        console.error("Database Update Error:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      if (result.affectedRows === 0) {
        console.warn(
          `Announcement with ID ${announcement_id} not found for update.`
        );
        return res.status(404).json({ message: "Announcement not found" });
      }
      return res
        .status(200)
        .json({ message: "Announcement updated successfully" });
    }
  );
};

// Delete an announcement
export const deleteAnnouncement = (req, res) => {
  const announcement_id = req.params.announcement_id;
  const sql = "DELETE FROM announcements WHERE announcement_id = ?";
  db.query(sql, [announcement_id], (err, result) => {
    if (err) {
      console.error("Database Deletion Error:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (result.affectedRows === 0) {
      console.warn(
        `Announcement with ID ${announcement_id} not found for deletion.`
      );
      return res.status(404).json({ message: "Announcement not found" });
    }
    return res
      .status(200)
      .json({ message: "Announcement deleted successfully" });
  });
};
