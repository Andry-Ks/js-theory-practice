// Debugging JavaScript

// 1. console.log for output
const x = 42;
console.log("The value of x is:", x);

// 2. console methods
console.warn("This is a warning");
console.error("This is an error");
console.info("Some info");

// 3. Grouping logs
console.group("User Info");
console.log("Name: Alice");
console.log("Age: 30");
console.groupEnd();

// 4. Measuring performance
console.time("loop");
for (let i = 0; i < 1e6; i++) {} // simulate workload
console.timeEnd("loop");

// 5. Stack trace
function a() {
  b();
}

function b() {
  c();
}

function c() {
  console.trace("Trace at c()");
}

a(); // shows call stack

// 6. Debugger keyword (pause in dev tools if enabled)
function testDebugger() {
  const a = 10;
  const b = 20;
  debugger; // pause here if dev tools are open
  return a + b;
}

testDebugger();