// src/errors/createErrorType.ts
import { CustomError } from "./CustomError";

export function createErrorType(name: string, statusCode: number) {
  return class extends CustomError {
    constructor(message: string, details?: Record<string, any>) {
      super(message, statusCode, details);
      this.name = name;
    }
  };
}
