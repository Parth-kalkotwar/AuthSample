import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";
import { compare } from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import { sign } from "jsonwebtoken";
import { pool } from "../../database/dbConfig";
import cookie from "cookie";
import { secret } from "../../auth/secret";

const cors = initMiddleware(
  Cors({
    methods: ["GET", "POST", "OPTIONS"],
  })
);

export default async function login(
  req = NextApiRequest,
  res = NextApiResponse
) {
  await cors(req, res);
  if (typeof req.body === "string") {
    req.body = JSON.parse(req.body);
  }
  if (req.method === "POST") {
    pool.query(
      `SELECT * FROM users WHERE email = $1`,
      [req.body.email],
      (err, results) => {
        if (err) {
          res.json(err);
        }
        //console.log(results.rows);

        if (results.rows.length > 0) {
          const user = results.rows[0];

          compare(req.body.password, user.password, (err, isMatch) => {
            if (err) {
              res.json(err);
            }
            if (isMatch) {
              var token = sign({ sub: user.email, name: user.name }, secret, {
                expiresIn: "1h",
              });
              res.setHeader(
                "Set-Cookie",
                cookie.serialize("auth", token, {
                  httpOnly: true,
                  secure: process.env.NODE_ENV !== "development",
                  sameSite: "strict",
                  maxAge: 3600,
                  path: "/",
                })
              );
              res.json({ jwt: token });
            } else {
              res.json({ message: "Password is incorrect" });
            }
          });
        } else {
          res.json({
            message: "No user with that email address",
          });
        }
      }
    );
  } else {
    res.json({ message: "We Only Support Post REquest" });
  }
  //res.json({ message: "Hello Everyone!" });
}
