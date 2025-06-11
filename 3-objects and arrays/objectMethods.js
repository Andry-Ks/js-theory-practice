// Object Methods in JavaScript

// 1. Object with method
const user = {
  name: "Alice",
  age: 30,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

user.greet(); // Hello, my name is Alice

// 2. Method shorthand
const dog = {
  breed: "Labrador",
  bark() {
    console.log("Woof!");
  },
};

dog.bark(); // Woof!

// 3. Using `this` keyword
const car = {
  brand: "Toyota",
  model: "Camry",
  getFullName() {
    return this.brand + " " + this.model;
  },
};

console.log(car.getFullName()); // Toyota Camry

// 4. Losing `this` context (common pitfall)
const fn = car.getFullName;
console.log(fn()); // ❌ undefined undefined

// Solution: bind or arrow function
const boundFn = car.getFullName.bind(car);
console.log(boundFn()); // Toyota Camry

// 5. Arrow functions do not bind their own `this`
const person = {
  name: "Bob",
  sayHello: () => {
    console.log("Hi, I'm " + this.name); // ❌ undefined
  },
};

person.sayHello(); // Hi, I'm undefined

// 6. Getter and Setter
const account = {
  owner: "John",
  _balance: 1000,

  get balance() {
    return "$" + this._balance;
  },

  set balance(value) {
    if (value >= 0) {
      this._balance = value;
    }
  },
};

console.log(account.balance); // $1000
account.balance = 2000;
console.log(account.balance); // $2000

// 7. Dynamic method assignment
const robot = {
  name: "R2D2",
};

robot.speak = function () {
  console.log(this.name + " says: Beep boop");
};

robot.speak(); // R2D2 says: Beep boop