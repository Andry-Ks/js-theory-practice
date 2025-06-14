// Error handling with try...catch

// 1. Basic example
try {
  const result = 10 / 0;
  console.log(result); // Infinity
  throw new Error("Custom error");
} catch (err) {
  console.error("Caught an error:", err.message);
}

// 2. Handling runtime error
try {
  let user = null;
  console.log(user.name); // ❌ TypeError
} catch (error) {
  console.error("Oops:", error.name);      // TypeError
  console.error("Message:", error.message); // Cannot read properties of null
}

// 3. Finally block (always runs)
try {
  console.log("Trying something risky...");
  JSON.parse("{bad json}"); // ❌ SyntaxError
} catch (e) {
  console.warn("Invalid JSON:", e.message);
} finally {
  console.log("Finished attempt.");
}

// 4. Nesting try...catch
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  } catch (err) {
    console.error("Error inside divide:", err.message);
    return null;
  }
}

console.log(divide(10, 2)); // 5
console.log(divide(10, 0)); // null

// 5. Common mistake: forgetting to catch asynchronous errors
try {
  setTimeout(() => {
    throw new Error("Async error"); // won't be caught here!
  }, 0);
} catch (e) {
  console.log("This will NOT catch the async error.");
}