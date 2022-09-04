import { errorHandler } from "../../../server/helpers/error-handler";
import dbConnect from "../../../server/lib/dbConnect";
import Power from "../../../server/models/Power";

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
        errorHandler(error, req, res);
      }
      break;
    case "POST":
      /* POST /api/powers => Add a power to database */
      try {
        const power = await Power.create(req.body);
        res.status(201).json({ success: true, data: power });
      } catch (error) {
        errorHandler(error, req, res);
      }
      break;
    default:
      /* Method not found */
      res.status(404).json({
        success: false,
        message: `Method not found for route: ${req.url}.`,
      });
      break;
  }
}
