import { hash } from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";
const { pool } = require("../../database/dbConfig");
var passwordValidator = require("password-validator");

const cors = initMiddleware(
  Cors({
    methods: ["GET", "POST", "OPTIONS"],
  })
);

export default async function signup(
  req = NextApiRequest,
  res = NextApiResponse
) {
  await cors(req, res);
  if (typeof req.body === "string") {
    req.body = JSON.parse(req.body);
  }
  if (req.method === "POST") {
    if (req.body.sm == "google") {
      console.log(req.body);
      const result = await pool.query(
        `INSERT INTO users (name,google_id,created_at) VALUES ($1, $2, NOW())`,
        [req.body.name, req.body.email]
      );

      const user = await pool.query(`SELECT * FROM users WHERE google_id= $1`, [
        req.body.email,
      ]);
      console.log(user);
      const event = new Date(user.rows[0].created_at);
      let created_at = event.toTimeString();
      created_at = created_at.split(" ");
      //console.log(created_at);
      res.json({
        message: "User Created Succesfully",
        email: user.rows[0].email,
        id: user.rows[0].id,
        created_at: created_at[0],
      });
    } else if (req.body.sm == "fb") {
      const result = await pool.query(
        `INSERT INTO users (name,fb_id,created_at) VALUES ($1, $2, NOW())`,
        [req.body.name, req.body.email]
      );

      const user = await pool.query(`SELECT * FROM users WHERE fb_id= $1`, [
        req.body.email,
      ]);
      console.log(user);
      const event = new Date(user.rows[0].created_at);
      let created_at = event.toTimeString();
      created_at = created_at.split(" ");
      //console.log(created_at);
      res.json({
        message: "User Created Succesfully",
        email: user.rows[0].email,
        id: user.rows[0].id,
        created_at: created_at[0],
      });
    } else {
      var schema = new passwordValidator();
      schema
        .is()
        .min(8)
        .is()
        .max(100)
        .has()
        .uppercase()
        .has()
        .lowercase()
        .has()
        .digits()
        .has()
        .not()
        .spaces()
        .is()
        .not()
        .oneOf(["Passw0rd", "Password123"]);
      if (!schema.validate(req.body.password)) {
        res.json({ message: "Weak Password" });
      } else {
        hash(req.body.password, 10, async function (err, hash) {
          const result = await pool.query(
            `INSERT INTO users (name,email,password,created_at) VALUES ($1, $2, $3, NOW())`,
            [req.body.name, req.body.email, hash]
          );
          const user = await pool.query(`SELECT * FROM users WHERE email= $1`, [
            req.body.email,
          ]);
          const event = new Date(user.rows[0].created_at);
          let created_at = event.toTimeString();
          created_at = created_at.split(" ");
          //console.log(created_at);
          res.json({
            message: "User Created Succesfully",
            email: user.rows[0].email,
            id: user.rows[0].id,
            created_at: created_at[0],
          });
        });
      }
    }
  } else {
    res.status(405).json({ message: "We only support POST" });
  }
}
