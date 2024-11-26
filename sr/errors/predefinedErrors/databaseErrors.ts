//   DATABASE_CONNECTION_ERROR = "ERR_DATABASE_CONNECTION",
//   RECORD_NOT_FOUND_ERROR = "ERR_RECORD_NOT_FOUND",
//   DUPLICATE_KEY_ERROR = "ERR_DUPLICATE_KEY",
//   QUERY_TIMEOUT_ERROR = "ERR_QUERY_TIMEOUT",
//   DATABASE_VALIDATION_ERROR = "ERR_DATABASE_VALIDATION",

import { ErrorCodes } from "../../utils/errorCodes";
import { CustomError, ErrorDetails } from "../CustomError";

export class DatabaseConnectionError extends CustomError {
  constructor(
    message: string = "Database Connection Failed",
    details?: ErrorDetails
  ) {
    super(message, 500, ErrorCodes.DATABASE_CONNECTION_ERROR, details);
  }
}

export class RecordNotFoundError extends CustomError {
  constructor(message: string = "Record Not Found", details?: ErrorDetails) {
    super(message, 404, ErrorCodes.RECORD_NOT_FOUND_ERROR, details);
  }
}

export class DuplicateKeyError extends CustomError {
  constructor(message: string = "Duplicate Key Error", details?: ErrorDetails) {
    super(message, 409, ErrorCodes.DUPLICATE_KEY_ERROR, details);
  }
}

export class QueryTimeoutError extends CustomError {
  constructor(message: string = "Query Timeout", details?: ErrorDetails) {
    super(message, 408, ErrorCodes.QUERY_TIMEOUT_ERROR, details);
  }
}

export class DatabaseValidationError extends CustomError {
  constructor(
    message: string = "Database Validation failed",
    details?: ErrorDetails
  ) {
    super(message, 400, ErrorCodes.DATABASE_VALIDATION_ERROR, details);
  }
}
