import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcrypt";

const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

const signup = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await sqlite.open({
    filename: "./mydb.sqlite",
    driver: sqlite3.Database,
  });

  if (req.method === "POST") {
    hash(req.body.password, 10, async function (err, hash) {
      const statement = await db.prepare(
        "INSERT INTO User (name, email, password) values (?, ?, ?)"
      );

      const result = await statement.run(req.body.name, req.body.email, hash);
      // result.finalize();

      const user = await db.all("select * from User");

      res.json(user);
    });
  } else {
    res.status(405).json({ message: "Only POST is supported" });
  }
};

export default signup;
