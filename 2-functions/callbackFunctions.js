// Callback Functions in JavaScript

// A callback is a function passed as an argument to another function,
// to be called later.

// 1. Simple example
function greetUser(name, callback) {
  console.log("Hello, " + name + "!");
  callback();
}

function showDoneMessage() {
  console.log("Callback executed.");
}

greetUser("Alice", showDoneMessage);
// Output:
// Hello, Alice!
// Callback executed.

// 2. Using anonymous function as callback
greetUser("Bob", function () {
  console.log("This is an anonymous callback.");
});

// 3. Arrow function as callback
greetUser("Eve", () => {
  console.log("Arrow callback fired.");
});

// 4. Callbacks with parameters
function process(num, callback) {
  const result = num * 2;
  callback(result);
}

process(4, function (value) {
  console.log("Processed value:", value); // 8
});

// 5. Common usage — array methods
const numbers = [1, 2, 3];

numbers.forEach(function (n) {
  console.log("Number:", n);
});

const squared = numbers.map(n => n * n);
console.log("Squared:", squared); // [1, 4, 9]

// 6. Callback hell (anti-pattern)
function step1(data, callback) {
  console.log("Step 1");
  callback(data + 1);
}

function step2(data, callback) {
  console.log("Step 2");
  callback(data + 1);
}

function step3(data) {
  console.log("Final result:", data);
}

step1(0, function (result1) {
  step2(result1, function (result2) {
    step3(result2);
  });
});