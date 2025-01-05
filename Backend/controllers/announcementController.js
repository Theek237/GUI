import db from "../models/db.js";

// Get all announcements
export const getAllAnnouncements = (req, res) => {
  const sql = "SELECT * FROM announcements";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

// Create a new announcement
export const createAnnouncement = (req, res) => {
  const sql =
    "INSERT INTO announcements (announcement_id, announcement_date, announcement_title, announcement_content) VALUES (?)";
  const values = [
    req.body.announcement_id,
    req.body.announcement_date,
    req.body.announcement_title,
    req.body.announcement_content,
  ];
  db.query(sql, [values], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json(result);
  });
};

// Get a single announcement by ID
export const getAnnouncementById = (req, res) => {
  const announcement_id = req.params.announcement_id;
  const sql = "SELECT * FROM announcements WHERE announcement_id = ?";
  db.query(sql, [announcement_id], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0)
      return res.status(404).json({ message: "Announcement not found" });
    res.json(result[0]);
  });
};

// Update an announcement's details
export const updateAnnouncement = (req, res) => {
  const announcement_id = req.params.announcement_id;
  const { announcement_date, announcement_title, announcement_content } =
    req.body;
  const sql =
    "UPDATE announcements SET announcement_date = ?, announcement_title = ?, announcement_content = ? WHERE announcement_id = ?";
  db.query(
    sql,
    [
      announcement_date,
      announcement_title,
      announcement_content,
      announcement_id,
    ],
    (err, result) => {
      if (err) return res.status(500).json(err);
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "Announcement not found" });
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
    if (err) return res.status(500).json(err);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Announcement not found" });
    return res
      .status(200)
      .json({ message: "Announcement deleted successfully" });
  });
};
