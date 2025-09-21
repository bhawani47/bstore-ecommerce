import { ApiError, MongoErrorHandler } from './ApiError.js';

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => {
    console.error('Caught Error:', err);

    if (
      err.name === 'MongoError' ||
      err.name === 'ValidationError' ||
      err.code === 11000 ||
      err.name === 'CastError'
    ) {
      return MongoErrorHandler.handle(err).send(res);
    }

    if (err instanceof ApiError) {
      return err.send(res);
    }

    return new ApiError(500, err.message || 'Internal Server Error').send(res);
  });
};

export default asyncHandler;
