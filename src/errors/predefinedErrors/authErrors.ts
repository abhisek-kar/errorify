import { ErrorCodes } from "../../utils/errorCodes";
import { CustomError, ErrorDetails } from "../CustomError";

export class AuthenticationError extends CustomError {
  constructor(
    message: string = "Authentication Failed",
    details: ErrorDetails = {}
  ) {
    super(message, 401, ErrorCodes.AUTHENTICATION_ERROR, details);
  }
}

export class AuthorizationError extends CustomError {
  constructor(
    message: string = "Authorization Failed",
    details: ErrorDetails = {}
  ) {
    super(message, 403, ErrorCodes.AUTHORIZATION_ERROR, details);
  }
}

export class TokenExpiredError extends CustomError {
  constructor(message: string = "Token Expired", details: ErrorDetails = {}) {
    super(message, 401, ErrorCodes.TOKEN_EXPIRED_ERROR, details);
  }
}

export class TokenInvalidError extends CustomError {
  constructor(message: string = "Invalid Token", details: ErrorDetails = {}) {
    super(message, 401, ErrorCodes.TOKEN_INVALID_ERROR, details);
  }
}

export class SessionTimeoutError extends CustomError {
  constructor(message: string = "Session Timeout", details: ErrorDetails = {}) {
    super(message, 401, ErrorCodes.SESSION_TIMEOUT_ERROR, details);
  }
}
