import { ErrorCodes } from "../../utils/errorCodes";
import { CustomError, ErrorDetails } from "../CustomError";

export class BadRequestError extends CustomError {
  constructor(message: string = "Bad Request Error", details?: ErrorDetails) {
    super(message =, 400, ErrorCodes.BAD_REQUEST_ERROR, details);
  }
}
export class UnauthorizedError extends CustomError {
  constructor(message: string = "Unauthorized Error", details?: ErrorDetails) {
    super(message, 401, ErrorCodes.UNAUTHORIZED_ERROR, details);
  }
}

export class ForbiddenError extends CustomError {
  constructor(message: string = "Forbidden Error", details?: ErrorDetails) {
    super(message, 403, ErrorCodes.FORBIDDEN_ERROR, details);
  }
}
export class NotFoundError extends CustomError {
  constructor(message: string = "Not Found Error", details?: ErrorDetails) {
    super(message, 404, ErrorCodes.NOT_FOUND_ERROR, details);
  }
}

export class MethodNotAllowedError extends CustomError {
  constructor(message: string = "Method Not Allowed Error", details?: ErrorDetails) {
    super(message, 405, ErrorCodes.METHOD_NOT_ALLOWED_ERROR, details);
  }
}
export class NotAcceptableError extends CustomError {
  constructor(message: string = "Not Acceptable Error", details?: ErrorDetails) {
    super(message, 406, ErrorCodes.NOT_ACCEPTABLE_ERROR, details);
  }
}

export class ConflictError extends CustomError {
  constructor(message: string = "Conflict Error", details?: ErrorDetails) {
    super(message, 409, ErrorCodes.CONFLICT_ERROR, details);
  }
}
export class GoneError extends CustomError {
  constructor(message: string = "Gone Error", details?: ErrorDetails) {
    super(message, 410, ErrorCodes.GONE_ERROR, details);
  }
}

export class UnprocessableEntityError extends CustomError {
  constructor(message: string = "Unprocessable Entity Error", details?: ErrorDetails) {
    super(message, 422, ErrorCodes.UNPROCESSABLE_ENTITY_ERROR, details);
  }
}
export class TooManyRequestsError extends CustomError {
  constructor(message: string = "Too Many Requests Error", details?: ErrorDetails) {
    super(message, 429, ErrorCodes.TOO_MANY_REQUESTS_ERROR, details);
  }
}

export class PreconditionFailedError extends CustomError {
  constructor(message: string = "Precondition Failed Error", details?: ErrorDetails) {
    super(message, 412, ErrorCodes.PRECONDITION_FAILED_ERROR, details);
  }
}

