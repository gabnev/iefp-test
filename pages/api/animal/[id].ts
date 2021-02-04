import { NextApiRequest, NextApiResponse } from "next";

const getAnimalById = (req: NextApiRequest, res: NextApiResponse) => {
  res.json({ byId: req.query.id, message: "getAnimalById" });
};

export default getAnimalById;
