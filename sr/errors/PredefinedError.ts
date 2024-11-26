// src/errors/PredefinedErrors.ts
import { CustomError } from "./CustomError";

export class ValidationError extends CustomError {
  constructor(message: string, details?: Record<string, any>) {
    super(message, 400, details);
  }
}

export class NotFoundError extends CustomError {
  constructor(message: string, details?: Record<string, any>) {
    super(message, 404, details);
  }
}
