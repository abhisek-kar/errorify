// tests/CustomError.test.ts
import { ValidationError, NotFoundError, createErrorType } from "../src";

describe("CustomError", () => {
  it("should create a ValidationError", () => {
    const error = new ValidationError("Invalid input", { field: "email" });
    expect(error.statusCode).toBe(400);
    expect(error.message).toBe("Invalid input");
    expect(error.details).toEqual({ field: "email" });
  });

  it("should create a NotFoundError", () => {
    const error = new NotFoundError("Resource not found");
    expect(error.statusCode).toBe(404);
    expect(error.message).toBe("Resource not found");
  });

  it("should create a custom error", () => {
    const CustomNotFoundError = createErrorType("CustomNotFoundError", 404);
    const error = new CustomNotFoundError("Custom error");
    expect(error.statusCode).toBe(404);
    expect(error.message).toBe("Custom error");
  });
});
