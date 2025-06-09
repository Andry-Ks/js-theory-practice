// JavaScript Operators

// 1. Arithmetic Operators
let a = 10;
let b = 3;

console.log(a + b);     //13
console.log(a - b);     //7
console.log(a * b);     //30
console.log(a / b);     //3.3333333333333335
console.log(a % b);     //1 (remainder)
console.log(a ** b);    //1000 (exponentiation)

// Increment / Decrement
let x = 5;
x++;                //same as x = x + 1
console.log(x);     //6

x--;
console.log(x);     //5

// 2. Assignment Operators
let y = 10;
y += 5;             // y = y + 5
y -= 3;             // y = y - 3
y *= 2;             // y = y * 2
y /= 4;             // y = y / 4
console.log(y);     // 6

// 3. Comparison Operators
console.log(5 > 3);     // true
console.log(5 < 3);     // false
console.log(5 >= 5);    // true
console.log(5 <= 4);    // false

// Equality
console.log(5 == "5");   // true (type coercion)
console.log(5 === "5");  // false (strict equality)
console.log(5 != "5");   // false
console.log(5 !== "5");  // true

// 4. Logical Operators
let isAdult = true;
let hasTicket = false;

console.log(isAdult && hasTicket); // false (AND)
console.log(isAdult || hasTicket); // true (OR)
console.log(!isAdult);             // false (NOT)

// 5. Nullish Coalescing (??)
let name = null;
let defaultName = name ?? "Guest"; // returns "Guest" if name is null or undefined
console.log(defaultName); // "Guest"

// 6. Ternary Operator
let age = 20;
let access = age >= 18 ? "Allowed" : "Denied";
console.log(access); // "Allowed"