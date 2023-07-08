class ErrorHandler extends Error {
  constructor(message, statusCode) {
    // Call the constructor of the parent class (Error)
    super(message);

    // Set the statusCode property of the error
    this.statusCode = statusCode;

    // Capture the stack trace of the error
    Error.captureStackTrace(this, this.constructor);
  }
}

// Export the ErrorHandler class
module.exports = ErrorHandler;
