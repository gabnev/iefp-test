import { NextApiRequest, NextApiResponse } from "next";

const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

const getAnimalById = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await sqlite.open({
    filename: "./mydb.sqlite",
    driver: sqlite3.Database,
  });

  const animal = await db.get("select * from Animal where id = ?", [
    req.query.id,
  ]);

  res.json(animal);
};

export default getAnimalById;
