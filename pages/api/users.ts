import { NextApiRequest, NextApiResponse } from "next";

const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

const getAllUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await sqlite.open({
    filename: "./mydb.sqlite",
    driver: sqlite3.Database,
  });

  const users = await db.all("select * from User");

  res.json(users);
};

export default getAllUsers;
