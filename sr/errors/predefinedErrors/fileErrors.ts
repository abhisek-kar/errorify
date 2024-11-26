import { ErrorCodes } from "../../utils/errorCodes";
import { CustomError, ErrorDetails } from "../CustomError";

export class FileUploadError extends CustomError {
  constructor(message: string = "File Upload Failed", details?: ErrorDetails) {
    super(message, 400, ErrorCodes.FILE_UPLOAD_ERROR, details);
  }
}

export class FileNotFoundError extends CustomError {
  constructor(message: string = "File Not Found", details?: ErrorDetails) {
    super(message, 404, ErrorCodes.FILE_NOT_FOUND_ERROR, details);
  }
}

export class FilePermissionError extends CustomError {
  constructor(message: string = "File Access Denied", details?: ErrorDetails) {
    super(message, 403, ErrorCodes.FILE_PERMISSION_ERROR, details);
  }
}

export class FileTooLargeError extends CustomError {
  constructor(message: string = "File Too Large", details?: ErrorDetails) {
    super(message, 413, ErrorCodes.FILE_TOO_LARGE_ERROR, details);
  }
}
