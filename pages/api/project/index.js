import Project from "../../../models/Project.js";
const dbConnect = require("../../lib/dbConnect.js");

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  switch(method) {
    case "GET":
      try {
        const posts = await Project.find({});
        res.status(200).json({ success: true, data: posts });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}

export default handler;
