// JavaScript Classes (ES6 syntax)

// 1. Basic class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const john = new Person("John", 35);
john.greet(); // Hello, my name is John

// 2. Methods are added to prototype (shared between instances)
const anna = new Person("Anna", 28);
console.log(john.greet === anna.greet); // true

// 3. Class expressions (anonymous or named)
const Animal = class {
  constructor(type) {
    this.type = type;
  }

  speak() {
    console.log(`A ${this.type} makes a sound.`);
  }
};

const dog = new Animal("dog");
dog.speak(); // A dog makes a sound.

// 4. Getters and setters
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set area(value) {
    console.log("Cannot set area directly. Please change width or height.");
  }
}

const rect = new Rectangle(10, 4);
console.log(rect.area); // 40
rect.area = 100; // warning message

// 5. Static methods
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtil.add(5, 3)); // 8

// 6. Private fields (# - ES2022+)
class BankAccount {
  #balance = 0;

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(100);
console.log(acc.getBalance()); // 100
// console.log(acc.#balance); // ❌ SyntaxError - private field