import { ErrorCodes } from "../utils/errorCodes";

// ErrorDetails type definition
export type ErrorDetails = { [key: string]: any } | null;

export class CustomError<T = ErrorDetails> extends Error {
  public statusCode: number;
  public errorCode?: string;
  public details?: T;
  public includeStackTrace: boolean;
  public stackTrace?: string;

  constructor(
    message: string = "Internal Server Error",
    statusCode: number = 500,
    errorCode: string = ErrorCodes.INTERNAL_SERVER_ERROR,
    details?: T
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.details = details;

    // Automatically decide whether to include stack trace based on NODE_ENV
    this.includeStackTrace = process.env.NODE_ENV === "development";

    // Optionally capture the stack trace
    if (this.includeStackTrace) {
      this.stackTrace = this.stack;
    }
  }

  // Serialize error to JSON format (for API response)
  public toJSON() {
    const errorResponse: any = {
      message: this.message,
      statusCode: this.statusCode,
      errorCode: this.errorCode,
      details: this.details,
    };

    // If stack trace is available and should be included, add it to the response
    if (this.includeStackTrace && this.stackTrace) {
      errorResponse.stackTrace = this.stackTrace;
    }

    return errorResponse;
  }
}
