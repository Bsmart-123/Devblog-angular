// server.js

const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to SQLite database (creates one if it doesn't exist)
const db = new sqlite3.Database("./blog.db", (err) => {
  if (err) {
    console.error("Error opening database", err);
  } else {
    console.log("Connected to SQLite database.");
  }
});

// Create blog_posts table if not exists
db.run(`
  CREATE TABLE IF NOT EXISTS blog_posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    content TEXT,
    date TEXT
  )
`);

// ROUTES

// GET all blog posts
app.get("/posts", (req, res) => {
  db.all("SELECT * FROM blog_posts ORDER BY id DESC", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

// POST a new blog post
app.post("/posts", (req, res) => {
  const { title, content, date } = req.body;
  db.run(
    `INSERT INTO blog_posts (title, content, date) VALUES (?, ?, ?)`,
    [title, content, date],
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ id: this.lastID, title, content, date });
      }
    }
  );
});

// DELETE a blog post by ID
app.delete("/posts/:id", (req, res) => {
  const id = req.params.id;
  db.run(`DELETE FROM blog_posts WHERE id = ?`, [id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: "Deleted successfully" });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
