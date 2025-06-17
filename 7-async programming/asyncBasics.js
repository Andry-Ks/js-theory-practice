// Synchronous vs Asynchronous

// 1. Synchronous (blocking)
console.log("Start");
for (let i = 0; i < 1e7; i++) {} // blocking loop
console.log("End");

// 2. Asynchronous with setTimeout
console.log("Before timeout");

setTimeout(() => {
  console.log("Inside timeout (async)");
}, 1000);

console.log("After timeout");

// Output order:
// Before timeout
// After timeout
// Inside timeout (after 1 sec)

// 3. Asynchronous with setInterval
let count = 0;
const intervalId = setInterval(() => {
  console.log("Interval tick", ++count);
  if (count >= 3) {
    clearInterval(intervalId); // stop after 3 ticks
  }
}, 500);

// 4. Asynchronous with Event Listeners
document.addEventListener("click", () => {
  console.log("Document clicked!");
});

// 5. Asynchronous nature: callbacks
function loadData(callback) {
  setTimeout(() => {
    callback("Data loaded");
  }, 1500);
}

loadData((data) => {
  console.log(data); // Data loaded
});

// 6. Execution order example
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");

// Output: A, C, B — because of event loop behavior