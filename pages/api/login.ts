import { NextApiRequest, NextApiResponse } from "next";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { secret } from "./secret";
import cookie from "cookie";

const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await sqlite.open({
    filename: "./mydb.sqlite",
    driver: sqlite3.Database,
  });

  if (req.method === "POST") {
    const user = await db.get("select * from user where email = ?", [
      req.body.email,
    ]);

    compare(req.body.password, user.password, function (err, result) {
      if (!err && result) {
        const claims = { sub: user.id, myUserEmail: user.email };
        const jwt = sign(claims, secret, {
          expiresIn: "1h",
        });

        res.setHeader(
          "Set-Cookie",
          cookie.serialize("auth", jwt, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: 3600,
            path: "/",
          })
        );
        res.json({ authToken: jwt });
      } else {
        res.json({ message: "Something went wrong" });
      }
    });
  } else {
    res.status(405).json({ message: "Only POST is supported" });
  }
};

export default login;
