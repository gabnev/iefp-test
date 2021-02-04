import { NextApiRequest, NextApiResponse } from "next";

const getAllAnimalsByUserId = (req: NextApiRequest, res: NextApiResponse) => {
  res.json({ byId: req.query.id, message: "getAllAnimalsByUserId" });
};

export default getAllAnimalsByUserId;
