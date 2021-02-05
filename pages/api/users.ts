import { verify } from "jsonwebtoken";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { secret } from "./secret";

const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

export const authenticated = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  verify(req.headers.authorization!, secret, async function (err, decoded) {
    if (!err && decoded) {
      return await fn(req, res);
    }

    res.status(401).json({ message: "Sorry you are not authenticated" });
  });
};

const getAllUsers = authenticated(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const db = await sqlite.open({
      filename: "./mydb.sqlite",
      driver: sqlite3.Database,
    });

    const users = await db.all("select id, email, name from User");

    res.json(users);
  }
);

export default getAllUsers;
