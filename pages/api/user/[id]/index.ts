import { NextApiRequest, NextApiResponse } from "next";

const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

const getUserById = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await sqlite.open({
    filename: "./mydb.sqlite",
    driver: sqlite3.Database,
  });

  if (req.method === "PUT") {
    const statement = await db.prepare(
      "UPDATE User SET name= ?, email= ?, where id = ?"
    );
    const result = await statement.run(
      req.body.name,
      req.body.email,
      req.query.id
    );
    result.finalize();
  }

  const user = await db.get("select * from User where id = ?", [req.query.id]);

  res.json(user);
};

export default getUserById;
