// class ErrorHandler extends Error {
//   constructor(message, statusCode) {
//     super(message);
//     this.statusCode = statusCode;
//   }
// }

class ErrorHandler extends Error {
  constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;

      Error.captureStackTrace(this, this.constructor);
  }
}


export const errorMiddleware = (err, req, res, next) => {
  // Default values for the error object
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // Handle CastError (e.g., invalid MongoDB ObjectId)
  if (err.name === "CastError") {
    const message = `Invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // Handle duplicate key errors (e.g., MongoDB duplicate entries)
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    err = new ErrorHandler(message, 400);
  }

  // Handle JWT errors (invalid or expired tokens)
  if (err.name === "JsonWebTokenError") {
    const message = `JSON Web Token is invalid, try again`;
    err = new ErrorHandler(message, 400);
  }

  if (err.name === "TokenExpiredError") {
    const message = `JSON Web Token has expired, try again`;
    err = new ErrorHandler(message, 400);
  }

  // Send the response with the appropriate status and message
  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

export default ErrorHandler;
