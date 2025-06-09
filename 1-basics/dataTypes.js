// JavaScript has 8 basic data types

// 1. Number - for all numeric values (integers and floats)
let age = 25;
let price = 19.99;

console.log(typeof age);   // "number"
console.log(typeof price); // "number"

// Special numeric values
console.log(1 / 0);         // Infinity
console.log("not a number" * 3); // NaN (Not a Number)

// 2. String - for text
let name1 = "Alice";
let greeting = 'Hello';
let message = `Hi, ${name1}!`; // Template literal

console.log(typeof name1);      // "string"
console.log(message);          // "Hi, Alice!"

// 3. Boolean - true or false
let isOnline = true;
let isLoggedIn = false;

console.log(typeof isOnline); // "boolean"

// 4. Null — intentional absence of any value
let empty = null;
console.log(typeof empty); // "object" (known JS bug)

// 5. Undefined — a variable that has not been assigned a value
let notDefined;
console.log(typeof notDefined); // "undefined"

// 6. Object - for collections of data and complex entities
let user = {
  username: "bob123",
  age: 30,
};

console.log(typeof user); // "object"

// 7. Symbol - unique and immutable identifiers
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2); // false

// 8. BigInt - for very large integers
let bigNumber = 9007199254740991n;
console.log(typeof bigNumber); // "bigint"