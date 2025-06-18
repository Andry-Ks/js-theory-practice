// Promises in JavaScript

// 1. Creating a promise
const promise = new Promise((resolve, reject) => {
  const success = true;

  setTimeout(() => {
    if (success) {
      resolve("✅ Promise resolved!");
    } else {
      reject("❌ Promise rejected!");
    }
  }, 1000);
});

// 2. Using .then() and .catch()
promise
  .then((result) => {
    console.log("Then:", result);
  })
  .catch((error) => {
    console.error("Catch:", error);
  });

// 3. Chaining promises
function doubleAsync(n) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(n * 2), 500);
  });
}

doubleAsync(2)
  .then((res1) => {
    console.log("First result:", res1);
    return doubleAsync(res1);
  })
  .then((res2) => {
    console.log("Second result:", res2);
  });

// 4. Promise.reject and Promise.resolve
Promise.resolve("Immediate value").then(console.log); // logs immediately

Promise.reject("Immediate error")
  .catch((err) => console.warn("Rejected immediately:", err));

// 5. Promise.all (wait for all)
const p1 = Promise.resolve(1);
const p2 = doubleAsync(3);
const p3 = doubleAsync(5);

Promise.all([p1, p2, p3]).then((values) => {
  console.log("All results:", values); // [1, 6, 10]
});

// 6. Promise.race (first to finish wins)
const slow = new Promise((res) => setTimeout(() => res("slow"), 2000));
const fast = new Promise((res) => setTimeout(() => res("fast"), 500));

Promise.race([slow, fast]).then((winner) => {
  console.log("Winner:", winner); // fast
});

// 7. Error in chain
Promise.resolve()
  .then(() => {
    throw new Error("Oops!");
  })
  .catch((err) => {
    console.error("Caught error:", err.message);
  });