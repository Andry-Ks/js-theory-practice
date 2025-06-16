// Throwing custom errors

// 1. Using throw with built-in Error
function checkAge(age) {
  if (age < 18) {
    throw new Error("User must be at least 18 years old.");
  }
  return "Access granted";
}

try {
  console.log(checkAge(21)); // Access granted
  console.log(checkAge(15)); // ❌ will throw
} catch (err) {
  console.error("Validation error:", err.message);
}

// 2. Throwing specific error types
function parseJSON(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    throw new SyntaxError("Invalid JSON format");
  }
}

try {
  parseJSON("{bad json}");
} catch (e) {
  console.error(e.name);    // SyntaxError
  console.error(e.message); // Invalid JSON format
}

// 3. Creating a custom error class
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function registerUser(username) {
  if (!username) {
    throw new ValidationError("Username is required");
  }
  return `${username} registered`;
}

try {
  registerUser("");
} catch (err) {
  if (err instanceof ValidationError) {
    console.warn("Custom error:", err.message);
  } else {
    throw err;
  }
}