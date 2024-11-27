// src/utils/errorFormatter.ts
import { CustomError } from "../errors/CustomError";

export function errorFormatter(error: CustomError) {
  return {
    status: error.statusCode,
    error: error.name,
    message: error.message,
    details: error.details || {},
  };
}
