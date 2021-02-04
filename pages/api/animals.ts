import { NextApiRequest, NextApiResponse } from "next";

const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

const getAllAnimals = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await sqlite.open({
    filename: "./mydb.sqlite",
    driver: sqlite3.Database,
  });

  const animals = await db.all("select * from Animal");

  res.json(animals);
};

export default getAllAnimals;
