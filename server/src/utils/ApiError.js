class ApiError extends Error {
  constructor(
    statusCode,
    message = 'Something Went Wrong!',
    errors = [],
    stack = ''
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  send(res) {
    return res.status(this.statusCode).json({
      success: this.success,
      statusCode: this.statusCode,
      error: {
        message: this.message,
        errors: this.errors.length ? this.errors : undefined,
        timestamp: new Date().toISOString(),
        path: res.req.originalUrl,
        method: res.req.method,
      },
    });
  }
}

class MongoErrorHandler {
  static handle(err) {
    if (err.code === 11000) {
      const field = Object.keys(err.keyValue)[0];
      return new ApiError(400, `${field} already exists`);
    }

    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((val) => val.message);
      return new ApiError(400, messages.join(', '));
    }

    if (err.name === 'CastError') {
      return new ApiError(400, `Invalid ${err.path}: ${err.value}`);
    }

    return new ApiError(500, err.message || 'MongoDB Error');
  }
}

export { ApiError, MongoErrorHandler };
