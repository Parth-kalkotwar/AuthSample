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

app.get("/api/posts/:post_id/likes", async (req, res) => {
  try {
    const posts = await pool.query(`SELECT * FROM posts`);
    console.log(posts.rows[0].likes);
    let likes = [];
    for (let i = 0; i < posts.rows[0].likes.length; i++) {
      console.log(posts.rows[0].likes[i]);
      let user = await pool.query(`SELECT * FROM users WHERE id = $1`, [
        parseInt(posts.rows[0].likes[i]),
      ]);
      console.log(user);
      likes.push(user.rows[0].name);
    }
    res.json(likes);
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

// Comments

app.get("/api/:post_id/comment", async (req, res) => {
  try {
    //console.log(req.body);
    const { post_id } = req.params;
    //console.log(title, details);
    const comments = await pool.query(
      `SELECT
      users.id,
      users.name,
      comments.comment_id,
      comments.comment_details,
      comments.post_id
    FROM
      comments
    LEFT JOIN users ON comments.user_id = users.id where comments.post_id = $1;`,
      [post_id]
    );
    res.json(comments.rows);
  } catch (error) {
    console.error(error.message);
  }
});

app.post("/api/:post_id/comment", async (req, res) => {
  try {
    //console.log(req.body);
    const { post_id } = req.params;
    const { details, user_id } = req.body;
    //console.log(title, details);
    const post = await pool.query(
      `INSERT INTO comments (post_id, user_id,comment_details) VALUES ($1, $2,$3) RETURNING *`,
      [post_id, user_id, details]
    );

    res.json(post.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

app.delete("/api/:post_id/comment/:comment_id", async (req, res) => {
  try {
    //console.log(req.body);
    const { comment_id } = req.params;
    //console.log(title, details);
    const deletecomment = await pool.query(
      `DELETE FROM comments WHERE comment_id = $1`,
      [comment_id]
    );

    res.json({ success: true });
  } catch (error) {
    console.error(error.message);
  }
});

// LIKES
/*
app.put("/api/:post_id/like/:user_id", async (req, res) => {
  try {
    //console.log(req.body);
    const { post_id, user_id } = req.params;
    //console.log(title, details);
    const post = await pool.query(
      `update posts
      set likes = likes || $1::BIGINT
      where post_id = $2;`,
      [user_id, post_id]
    );
    res.json(post);
  } catch (error) {
    console.error(error.message);
  }
});*/

app.get("/api/:post_id/likes", async (req, res) => {
  try {
    const { post_id } = req.params;
    const likes = await pool.query(
      `select * from likes JOIN users ON users.id=likes.user_id where post_id = $1;`,
      [post_id]
    );
    res.json(likes.rows);
  } catch (error) {
    console.error(error.message);
  }
});

app.post("/api/:post_id/:user_id/likes", async (req, res) => {
  try {
    const { post_id, user_id } = req.params;
    const likes = await pool.query(
      `INSERT INTO likes (user_id, post_id) VALUES($1,$2) RETURNING *`,
      [user_id, post_id]
    );
    res.json(likes.rows);
  } catch (error) {
    console.error(error.message);
  }
});

app.delete("/api/:post_id/:user_id/likes", async (req, res) => {
  try {
    const { post_id, user_id } = req.params;
    //console.log(id);
    const unlike = await pool.query(
      `delete from likes where post_id=$1 AND user_id=$2;`,
      [post_id, user_id]
    );
    res.json({ success: true });
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
