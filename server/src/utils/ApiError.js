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

export { ApiError };
