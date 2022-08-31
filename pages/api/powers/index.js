import dbConnect from "../../../lib/dbConnect";
import Power from "../../../models/Power";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      /* GET /api/powers => Get powers from database */
      try {
        const powers = await Power.find({});
        res.status(200).json({ success: true, data: powers });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      /* POST /api/powers => Add a power to database */
      try {
        const power = await Power.create(req.body);
        res.status(201).json({ success: true, data: power });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      /* Method not supported */
      res.status(404).json({ success: false });
      break;
  }
}
