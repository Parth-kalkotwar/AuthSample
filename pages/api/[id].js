const { pool } = require("../../database/dbConfig");
import { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";

const cors = initMiddleware(
  Cors({
    methods: ["GET", "POST", "OPTIONS"],
  })
);

export default async function AllUsers(
  req = NextApiRequest,
  res = NextApiResponse
) {
  await cors(req, res);
  console.log(req.query.id);
  pool.query(
    `SELECT * FROM users WHERE id = $1`,
    [req.query.id],
    (err, results) => {
      if (err) {
        console.log("Err", err);
      }
      //console.log("result", results.rows);
      res.json(results.rows);
    }
  );
}
