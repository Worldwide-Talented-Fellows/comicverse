const errorMap = {
    CastError: (error, res) => {
        return sendErrorResponse(
            res,
            400,
            `Invalid ${error.path}: ${error.value}.`
        );
    },
    ValidationError: (error, res) => {
        const errors = Object.values(error.errors).map((el) => el.message);
        return sendErrorResponse(
            res,
            400,
            `Invalid input data. ${errors.join(' ')}`
        );
    },
    NotFoundError: (error, res) => {
        return sendErrorResponse(
            res,
            404,
            error.message ?? 'Data is not exists'
        );
    },
    AuthorizationError: (error, res) => {
        return sendErrorResponse(
            res,
            401,
            error.message ?? 'Unauthorized request'
        );
    },
    MissingCredentialsError: (error, res) => {
        return sendErrorResponse(
            res,
            400,
            error.message ?? 'Missing credentials'
        );
    },
    ForbiddenError: (error, res) => {
        return sendErrorResponse(
            res,
            403,
            error.message ?? `You don't have permission to do this request`
        );
    },
    11000: (error, res) => {
        const value = error.errmsg.match(/(["'])(\\?.)*?\1/)[0];
        return sendErrorResponse(
            res,
            400,
            `Duplicate field value: ${value}. Please use another value!`
        );
    },
    DefaultError: (res) => {
        return sendErrorResponse(res);
    },
};

function sendErrorResponse(
    res,
    status = 500,
    message = 'Something went wrong! Please try again later'
) {
    return res.status(status).json({
        success: false,
        message,
    });
}

export default function errorHandler(error, res) {
    console.log(error);
    if (error.name in errorMap) {
        return errorMap[error.name](error, res);
    } else if (error.code in errorMap) {
        return errorMap[error.code](error, res);
    }
    return errorMap.DefaultError(res);
}
