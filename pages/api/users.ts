import { NextApiRequest, NextApiResponse } from "next";

const getAllUsers = (req: NextApiRequest, res: NextApiResponse) => {
  res.json([{ name: "Gabs" }, { name: "Stella" }]);
};

export default getAllUsers;
