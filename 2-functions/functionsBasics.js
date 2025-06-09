// Function Basics in JavaScript

// 1. Function declaration
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice"); // Hello, Alice!

// 2. Function expression (anonymous)
const sayHi = function () {
  console.log("Hi there!");
};

sayHi(); // Hi there!

// 3. Function with return value
function add(a, b) {
  return a + b;
}

let sum = add(5, 3);
console.log("Sum:", sum); // 8

// 4. Function parameters vs. arguments
function multiply(x, y) {
  console.log("Parameters:", x, y);
  return x * y;
}

let result = multiply(4, 2); // Arguments: 4 and 2
console.log("Result:", result); // 8

// 5. Default parameters
function greetUser(user = "Guest") {
  console.log("Welcome, " + user);
}

greetUser("Bob");    // Welcome, Bob
greetUser();         // Welcome, Guest

// 6. Function hoisting
hoisted(); // This works because function declarations are hoisted

function hoisted() {
  console.log("This function is hoisted.");
}

// NOTE: Function expressions are NOT hoisted
/*
notHoisted(); // ReferenceError

const notHoisted = function () {
  console.log("This will not work if called before definition.");
};
*/

// 7. Function inside a function
function outer() {
  console.log("Outer function");

  function inner() {
    console.log("Inner function");
  }

  inner();
}

outer();
// Outer function
// Inner function
