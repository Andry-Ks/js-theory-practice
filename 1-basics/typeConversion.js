// Type Conversion in JavaScript

// Implicit conversion (type coercion)
console.log("5" + 3);       // "53" → number 3 converted to string
console.log("5" - 3);       // 2 → string "5" converted to number
console.log("5" * "2");     // 10 → both strings converted to numbers
console.log(true + 1);      // 2 → true becomes 1
console.log(false + "1");   // "false1" → false becomes "false"

// Explicit conversion (manual)

// To String
let num = 123;
let str = String(num);
console.log(str);           // "123"
console.log(typeof str);    // "string"

// To Number
console.log(Number("456"));     // 456
console.log(Number(""));        // 0
console.log(Number("abc"));     // NaN
console.log(Number(true));      // 1
console.log(Number(false));     // 0
console.log(Number(null));      // 0
console.log(Number(undefined)); // NaN

// To Boolean
console.log(Boolean(0));         // false
console.log(Boolean(1));         // true
console.log(Boolean(""));        // false
console.log(Boolean("hello"));   // true
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean([]));        // true
console.log(Boolean({}));        // true

// Common short forms
let n = +"42";         // same as Number("42")
let b = !!"text";      // same as Boolean("text")

console.log(n); // 42
console.log(b); // true