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
