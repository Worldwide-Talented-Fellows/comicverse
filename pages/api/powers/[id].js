import dbConnect from "../../../lib/dbConnect";
import Power from "../../../models/Power";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      /* GET /api/powers/:id => Get a specific power from database (by its id) */
      try {
        const power = await Power.findById(id);
        if (!power) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: power });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT":
      /* PUT /api/powers/:id => Update a specific power in database */
      try {
        const power = await Power.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!power) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: power });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE":
      /* DELETE /api/powers/:id => Remove a specific power from database */
      try {
        const deletedPower = await Power.deleteOne({ _id: id });
        if (!deletedPower) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
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
