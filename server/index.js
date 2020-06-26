const express = require("express");
const app = express();
const cors = require("cors");
const { pool } = require("./db");

app.use(cors());
app.use(express.json());

app.put("/api/:id/name", async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const user = await pool.query(`UPDATE users SET name = $1 WHERE id = $2`, [
      name,
      id,
    ]);
  } catch (error) {
    console.log(error.message);
  }
});

app.post("/api/:user_id/posts", async (req, res) => {
  try {
    //console.log(req.body);
    const { user_id } = req.params;
    const { title, details } = req.body;
    //console.log(title, details);
    const post = await pool.query(
      `INSERT INTO posts(so_id,title,details) VALUES($1,$2,$3) RETURNING *`,
      [user_id, title, details]
    );
    res.json(post.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/api/posts", async (req, res) => {
  try {
    const posts = await pool.query(`SELECT * FROM posts`);
    res.json(posts.rows);
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/api/:user_id/posts", async (req, res) => {
  try {
    const { user_id } = req.params;
    const posts = await pool.query(`SELECT * FROM posts where so_id = $1`, [
      user_id,
    ]);
    res.json(posts.rows);
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/api/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await pool.query(`SELECT * FROM posts WHERE post_id = $1`, [
      id,
    ]);
    res.json(post.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.put("/api/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, details } = req.body;
    console.log(title, details, id);
    if (details === undefined) {
      const updatePost = await pool.query(
        "UPDATE posts SET title = $1 WHERE post_id = $2",
        [title, id]
      );
    } else if (title === undefined) {
      const updatePost = await pool.query(
        "UPDATE posts SET details = $1 WHERE post_id = $2",
        [details, id]
      );
    } else {
      const updatePost = await pool.query(
        "UPDATE posts SET details = $1, title = $2 WHERE post_id = $3",
        [details, title, id]
      );
    }
    res.json({ success: true });
  } catch (err) {
    console.error(err.message);
  }
});

app.delete("/api/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    //console.log(id);
    const deletepost = await pool.query(
      `DELETE FROM posts WHERE post_id = $1`,
      [id]
    );

    res.json({ success: true });
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
