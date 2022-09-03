import dbConnect from "../../../lib/dbConnect";
import Power from "../../../models/Power";

export const errorHandler = (error, req, res) => {
  if (error.name === "CastError") {
    return res.status(400).json({
      success: false,
      message: `Invalid ${error.path}: ${error.value}.`,
    });
  }
  if (error.name === "ValidationError") {
    const errors = Object.values(error.errors).map((el) => el.message);
    return res.status(400).json({
      success: false,
      message: `Invalid input data. ${errors.join(" ")}`,
    });
  }
  if (error.code === 11000) {
    const value = error.errmsg.match(/(["'])(\\?.)*?\1/)[0];
    return res.status(400).json({
      success: false,
      message: `Duplicate field value: ${value}. Please use another value!`,
    });
  }

  res.status(500).json({
    success: false,
    message: "Something went wrong! Please try again later.",
  });
};

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
