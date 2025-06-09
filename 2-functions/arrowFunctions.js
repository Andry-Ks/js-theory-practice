// Arrow Functions in JavaScript

// 1. Basic arrow function
const add = (a, b) => {
  return a + b;
};

console.log(add(3, 4)); // 7

// 2. Short form (implicit return)
const multiply = (x, y) => x * y;

console.log(multiply(2, 5)); // 10

// 3. One parameter can skip parentheses
const square = n => n * n;

console.log(square(6)); // 36

// 4. No parameters — use empty parentheses
const greet = () => console.log("Hello!");

greet(); // Hello!

// 5. Returning an object — wrap it in parentheses
const createUser = (name, age) => ({
  name: name,
  age: age,
});

console.log(createUser("Alice", 30));
// { name: 'Alice', age: 30 }

// 6. Arrow functions and `this`
// Arrow functions do not have their own `this`

const user = {
  name: "Bob",
  regularFunction: function () {
    console.log("regularFunction:", this.name);
  },
  arrowFunction: () => {
    console.log("arrowFunction:", this.name); // `this` is not the user object
  },
};

user.regularFunction(); // Bob
user.arrowFunction();   // undefined (or global context)

// 7. Cannot be used as constructors
/*
const Person = (name) => {
  this.name = name;
};

const p = new Person("Alice"); // TypeError
*/

// 8. Cannot use `arguments` object
function normal() {
  console.log("arguments:", arguments);
}
normal(1, 2, 3); // works

const arrow = () => {
  // console.log("arguments:", arguments); // ReferenceError
};
