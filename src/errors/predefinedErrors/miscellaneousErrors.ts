import { ErrorCodes } from "../../utils/errorCodes";
import { CustomError, ErrorDetails } from "../CustomError";

export class UnknownError extends CustomError {
  constructor(message: string = "Unknown Error", details: ErrorDetails = {}) {
    super(message, 500, ErrorCodes.UNKNOWN_ERROR, details);
  }
}
export class RateLimitExceededError extends CustomError {
  constructor(
    message: string = "You're being rate-limited. Please try again later.",
    details: ErrorDetails = {}
  ) {
    super(message, 429, ErrorCodes.RATE_LIMIT_EXCEEDED_ERROR, details);
  }
}

export class FeatureNotEnabledError extends CustomError {
  constructor(
    message: string = "Feature Not Enabled",
    details: ErrorDetails = {}
  ) {
    super(message, 403, ErrorCodes.FEATURE_NOT_ENABLED_ERROR, details);
  }
}

export class InvalidStateError extends CustomError {
  constructor(
    message: string = "Invalid Application State",
    details: ErrorDetails = {}
  ) {
    super(message, 400, ErrorCodes.INVALID_STATE_ERROR, details);
  }
}

export class OperationFailedError extends CustomError {
  constructor(
    message: string = "Operation Failed",
    details: ErrorDetails = {}
  ) {
    super(message, 500, ErrorCodes.OPERATION_FAILED_ERROR, details);
  }
}

export class InvalidInputError extends CustomError {
  constructor(message: string = "Invalid Input", details: ErrorDetails = {}) {
    super(message, 400, ErrorCodes.INVALID_INPUT_ERROR, details);
  }
}

export class ExternalServiceError extends CustomError {
  constructor(
    message: string = "External Service Error",
    details: ErrorDetails = {}
  ) {
    super(message, 502, ErrorCodes.EXTERNAL_SERVICE_ERROR, details);
  }
}

export class ServiceTimeoutError extends CustomError {
  constructor(
    message: string = "Service Timeout Error",
    details: ErrorDetails = {}
  ) {
    super(message, 504, ErrorCodes.SERVICE_TIMEOUT_ERROR, details);
  }
}
