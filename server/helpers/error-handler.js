const errorMap = {
	CastError: (error, res) => {
		return sendErrorResponse(res, 400, `Invalid ${error.path}: ${error.value}.`);
	},
	ValidationError: (error, res) => {
		const errors = Object.values(error.errors).map(el => el.message);
		return sendErrorResponse(res, 400, `Invalid input data. ${errors.join(" ")}`);
	},
	NotFoundError: (error, res) => {
		return sendErrorResponse(res, 404, error.message ?? "Data is not exists");
	},
	11000: () => {
		const value = error.errmsg.match(/(["'])(\\?.)*?\1/)[0];
		return sendErrorResponse(res, 400, `Duplicate field value: ${value}. Please use another value!`);
	},
	DefaultError: res => {
		return sendErrorResponse(res);
	},
};

function sendErrorResponse(res, status = 500, message = "Something went wrong! Please try again later") {
	return res.status(status).json({
		success: false,
		message,
	});
}

export default function errorHandler(error, res) {
	if (error.name in errorMap) {
		return errorMap[error.name](error, res);
	} else if (error.code in errorMap) {
		return errorMap[error.code](error, res);
	}
	return errorMap.DefaultError(res);
}
