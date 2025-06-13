// Constructor Functions in JavaScript

// 1. Basic constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log("Hi, I'm " + this.name);
  };
}

// 2. Creating instances
const alice = new Person("Alice", 30);
const bob = new Person("Bob", 25);

alice.sayHi(); // Hi, I'm Alice
bob.sayHi();   // Hi, I'm Bob

// 3. Each instance has its own copy of methods (inefficient)
console.log(alice.sayHi === bob.sayHi); // false

// 4. Best practice - use prototype for shared methods
function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  console.log("A " + this.type + " makes a sound.");
};

const dog = new Animal("dog");
const cat = new Animal("cat");

dog.speak(); // A dog makes a sound.
cat.speak(); // A cat makes a sound.

console.log(dog.speak === cat.speak); // true - shared method

// 5. Constructor functions with default values
function Car(brand, year = 2020) {
  this.brand = brand;
  this.year = year;
}

const tesla = new Car("Tesla");
console.log(tesla); // Car { brand: 'Tesla', year: 2020 }

// 6. Use `instanceof` to check constructor
console.log(tesla instanceof Car); // true
console.log(alice instanceof Person); // true

// 7. What happens if you forget `new`?
function Book(title) {
  this.title = title;
}

const book1 = new Book("Dune");
// Forgetting `new` - `this` refers to global object or undefined in strict mode
// const book2 = Book("1984"); // ❌ Don't do this!

// To enforce `new`, check inside constructor:
function SafeBook(title) {
  if (!(this instanceof SafeBook)) {
    return new SafeBook(title);
  }
  this.title = title;
}

const book3 = SafeBook("Foundation");
console.log(book3.title); // Foundation