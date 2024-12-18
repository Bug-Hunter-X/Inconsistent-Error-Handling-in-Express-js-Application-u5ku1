# Express.js Inconsistent Error Handling

This repository demonstrates a common error in Express.js applications: inconsistent error handling that masks the true nature of errors.

## Bug

The `bug.js` file contains an Express.js application with a route handler that may return a 404 error if a user is not found. However, the global error handler always returns a 500 error, regardless of the original error type. This makes debugging difficult because the client always receives a generic 500 error, providing no information about the specific issue.

## Solution

The `bugSolution.js` file provides a corrected version of the application. It separates error handling based on the error type, allowing appropriate HTTP status codes to be returned to the client.  The global error handler is reserved for truly unexpected errors.