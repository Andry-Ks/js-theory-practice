// Using async/await

// 1. Basic async function
async function greet() {
  return "Hello from async!";
}

greet().then(console.log); // "Hello from async!"

// 2. Awaiting a promise
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runTimer() {
  console.log("Waiting...");
  await delay(1000);
  console.log("Done after 1 second");
}

runTimer();

// 3. Awaiting value from another async function
async function doubleAsync(n) {
  await delay(500);
  return n * 2;
}

async function doMath() {
  const a = await doubleAsync(5);
  const b = await doubleAsync(10);
  console.log("Sum:", a + b); // 10 + 20 = 30
}

doMath();

// 4. Error handling with try...catch
async function loadData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!response.ok) throw new Error("HTTP error");
    const data = await response.json();
    console.log("Post title:", data.title);
  } catch (err) {
    console.error("Fetch error:", err.message);
  }
}

loadData();

// 5. Parallel awaits with Promise.all
async function runInParallel() {
  const [a, b, c] = await Promise.all([
    doubleAsync(2),
    doubleAsync(4),
    doubleAsync(6),
  ]);
  console.log("Parallel results:", a, b, c); // 4 8 12
}

runInParallel();

// 6. await only inside async function (SyntaxError if outside)
// This will throw a SyntaxError
const result = await Promise.resolve(42);
console.log(result);

// Correct option
async function example() {
  const result = await Promise.resolve(42);
  console.log(result);
}

example();