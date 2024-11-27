# **@dev-abhi/errorify**

A lightweight utility package for simplified error handling and management in **Node.js** applications. It provides a structured way to define, manage, and serialize custom errors with support for **TypeScript**, error codes, and stack trace control.

---

## **Installation**

```bash
npm install @dev-abhi/errorify
```

---

## **Features**

- **Custom Error Class**: Define your own errors with status codes, error codes, and additional details.
- **Predefined Error Types**: Quickly use predefined errors like `ValidationError`, `DatabaseError`, etc.
- **Error Serialization**: Convert errors to JSON for structured API responses.
- **Environment-Based Stack Traces**: Automatically include or exclude stack traces based on environment configuration.
- **TypeScript Support**: Built with TypeScript for strong typing and generics.

---

## **Usage**

### **1. Setting up Custom Errors**

You can define custom errors using the `CustomError` class.

```typescript
import { CustomError } from "@dev-abhi/errorify";

// Example: Creating a custom error
const error = new CustomError(
  "Something went wrong", // message
  400, // statusCode
  "BAD_REQUEST", // errorCode
  { invalidField: "name" } // additional details (optional)
);

console.log(error.toJSON());
// Output:
// {
//   message: "Something went wrong",
//   statusCode: 400,
//   errorCode: "BAD_REQUEST",
//   details: { invalidField: "name" }
// }
```

---

### **2. Predefined Error Types**

The package includes a set of predefined errors for common use cases, such as:

- **Validation Errors**
- **Database Errors**
- **Authentication Errors**
- **File Errors**
- **Client-Side Errors**
- **Server-Side Errors**

#### Example: Using Predefined Errors

```typescript
import { ValidationError, DatabaseError } from "@dev-abhi/errorify";

// Validation error
const validationError = new ValidationError(
  "Invalid email address",
  { field: "email" } // additional details
);
console.log(validationError.toJSON());

// Database error
const dbError = new DatabaseError("Failed to connect to the database");
console.log(dbError.toJSON());
```

---

### **3. Configuring Stack Trace Handling**

Control whether stack traces are included in errors based on your environment. By default:

- In **development**, stack traces are included.
- In **production**, stack traces are excluded.

#### Setup:

Configure the environment once during application startup:

```typescript
import { setErrorConfig } from "@dev-abhi/errorify";

setErrorConfig({
  includeStackTrace: process.env.NODE_ENV === "development", // true for dev, false for prod
});
```

Now, all errors created using `CustomError` or predefined errors will respect this setting.

---

### **4. Integration with Express Middleware**

Easily handle errors in an Express app using the provided structure.

#### Example Middleware:

```typescript
import express, { Request, Response, NextFunction } from "express";
import { CustomError } from "@dev-abhi/errorify";

const app = express();

// Sample route
app.get("/", (req, res, next) => {
  next(new CustomError("Resource not found", 404, "NOT_FOUND"));
});

// Error-handling middleware
app.use((err: CustomError, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json(err.toJSON());
  }
  res.status(500).json({ message: "Internal Server Error" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

---

### **5. Adding Custom Error Types**

You can extend `CustomError` to create your own error types.

#### Example:

```typescript
import { CustomError } from "@dev-abhi/errorify";

class PaymentError extends CustomError {
  constructor(message = "Payment failed", details?: any) {
    super(message, 402, "PAYMENT_ERROR", details);
  }
}

// Usage
const paymentError = new PaymentError("Insufficient balance", {
  userId: "12345",
});
console.log(paymentError.toJSON());
```

---

### **6. TypeScript Support**

The package uses generics to allow strongly-typed error details.

#### Example:

```typescript
import { CustomError } from "@dev-abhi/errorify";

interface UserDetails {
  field: string;
  issue: string;
}

const userError = new CustomError<UserDetails>(
  "Validation error",
  400,
  "VALIDATION_ERROR",
  { field: "username", issue: "too short" }
);
console.log(userError.details.field); // "username"
```

---

### **API Reference**

#### **CustomError Class**

| Property     | Type       | Description                                             |
| ------------ | ---------- | ------------------------------------------------------- |
| `message`    | `string`   | Error message.                                          |
| `statusCode` | `number`   | HTTP status code (default: `500`).                      |
| `errorCode`  | `string`   | A unique error code (default: `INTERNAL_SERVER_ERROR`). |
| `details`    | `any`      | Additional details for the error (optional).            |
| `toJSON()`   | `function` | Serialize the error to JSON format.                     |

#### **setErrorConfig Function**

| Parameter           | Type      | Description                                |
| ------------------- | --------- | ------------------------------------------ |
| `includeStackTrace` | `boolean` | Whether to include stack traces in errors. |

---

## **Development**

### **Running Locally**

1. Clone the repository:
   ```bash
   git clone https://github.com/abhisek-kar/errorify.git
   cd errorify
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the project:
   ```bash
   npm run build
   ```
4. Test the project:
   ```bash
   npm test
   ```

---

## **License**

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

Feel free to enhance or adapt this file based on your actual repository and additional features! Let me know if you'd like further refinements.
