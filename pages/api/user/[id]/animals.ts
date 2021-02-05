import { NextApiRequest, NextApiResponse } from "next";

const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

const getUserById = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await sqlite.open({
    filename: "./mydb.sqlite",
    driver: sqlite3.Database,
  });

  const allUserAnimals = await db.all(
    "select * from Animal where ownerId = ?",
    [req.query.id]
  );

  res.json(allUserAnimals);
};

export default getUserById;
