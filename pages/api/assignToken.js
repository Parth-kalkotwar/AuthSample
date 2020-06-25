import { compare } from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import { sign } from "jsonwebtoken";
import cookie from "cookie";
import { secret } from "../../auth/secret";
import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";

const cors = initMiddleware(
  Cors({
    methods: ["GET", "POST", "OPTIONS"],
  })
);

export default async function asignToken(
  req = NextApiRequest,
  res = NextApiResponse
) {
  await cors(req, res);
  req.body = JSON.parse(req.body);
  var token = sign({ sub: req.body.email }, secret, {
    expiresIn: "1h",
  });
  //console.log(req.body);
  res.setHeader(
    "Set-Cookie",
    cookie.serialize(req.body.sm, token, {
      httpOnly: false,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 3600,
      path: "/",
    })
  );
  res.json({ success: true });
}
