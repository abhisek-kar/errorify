//   INTERNAL_SERVER_ERROR = "ERR_INTERNAL_SERVER_ERROR",
//   NOT_IMPLEMENTED = "ERR_NOT_IMPLEMENTED",
//   BAD_GATEWAY = "ERR_BAD_GATEWAY",
//   SERVICE_UNAVAILABLE = "ERR_SERVICE_UNAVAILABLE",
//   GATEWAY_TIMEOUT = "ERR_GATEWAY_TIMEOUT",
//   HTTP_VERSION_NOT_SUPPORTED = "ERR_HTTP_VERSION_NOT_SUPPORTED",

import { ErrorCodes } from "../../utils/errorCodes";
import { CustomError, ErrorDetails } from "../CustomError";

export class InternalServerError extends CustomError {
  constructor(
    message: string = "Internal Server Error",
    details?: ErrorDetails
  ) {
    super(message, 500, ErrorCodes.INTERNAL_SERVER_ERROR, details);
  }
}

export class NotImplementedError extends CustomError {
  constructor(
    message: string = "Not Implemented Error",
    details?: ErrorDetails
  ) {
    super(message, 501, ErrorCodes.NOT_IMPLEMENTED_ERROR, details);
  }
}

export class BadGatewayError extends CustomError {
  constructor(message: string = "Bad Gateway Error", details?: ErrorDetails) {
    super(message, 502, ErrorCodes.BAD_GATEWAY_ERROR, details);
  }
}

export class ServiceUnavailableError extends CustomError {
  constructor(
    message: string = "Service Unavailable Error",
    details?: ErrorDetails
  ) {
    super(message, 503, ErrorCodes.SERVICE_UNAVAILABLE_ERROR, details);
  }
}

export class GatewayTimeoutError extends CustomError {
  constructor(
    message: string = "Gateway Timeout Error",
    details?: ErrorDetails
  ) {
    super(message, 504, ErrorCodes.GATEWAY_TIMEOUT_ERROR, details);
  }
}

export class HttpVersionNotSupportedError extends CustomError {
  constructor(
    message: string = "HTTP Version Not Supported Error",
    details?: ErrorDetails
  ) {
    super(message, 505, ErrorCodes.HTTP_VERSION_NOT_SUPPORTED_ERROR, details);
  }
}
