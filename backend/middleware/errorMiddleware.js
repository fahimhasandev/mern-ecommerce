// url not found middleware
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// default error handler
const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  // check for Mongoose bad ObjectId - CastError: Cast to ObjectId failed for value
  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    message = `Resource Not Found`;
    statusCode = 404;
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === 'production' ? 'Pancake' : err.stack,
  });
};

export { errorHandler, notFound };
