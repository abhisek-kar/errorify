import { ErrorCodes } from "../../utils/errorCodes";
import { CustomError, ErrorDetails } from "../CustomError";

export class ValidationError extends CustomError {
  constructor(
    message: string = "Validation Failed",
    details: ErrorDetails = {}
  ) {
    super(message, 400, ErrorCodes.VALIDATION_ERROR, details);
  }
}

export class FieldRequiredError extends CustomError {
  constructor(field: string) {
    super(`${field} is required`, 400, ErrorCodes.FIELD_REQUIRED_ERROR, {
      field,
    });
  }
}

export class FieldLengthError extends CustomError {
  constructor(field: string, minLength: number, maxLength: number) {
    super(
      `${field} must be between ${minLength} and ${maxLength} characters`,
      400,
      ErrorCodes.FIELD_LENGTH_ERROR,
      { field, minLength, maxLength }
    );
  }
}

export class FieldFormatError extends CustomError {
  constructor(field: string) {
    super(
      `${field} has an invalid format`,
      400,
      ErrorCodes.FIELD_FORMAT_ERROR,
      { field }
    );
  }
}
