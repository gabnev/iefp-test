import { NextApiRequest, NextApiResponse } from "next";

const getAllAnimals = (req: NextApiRequest, res: NextApiResponse) => {
  res.json({ hello: "world", method: req.method });
};

export default getAllAnimals;
