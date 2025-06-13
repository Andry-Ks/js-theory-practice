// Common String Methods in JavaScript

const text = "  Hello JavaScript!  ";

// 1. length
console.log(text.length); // includes spaces

// 2. trim, trimStart, trimEnd
console.log(text.trim());      // "Hello JavaScript!"
console.log(text.trimStart()); // "Hello JavaScript!  "
console.log(text.trimEnd());   // "  Hello JavaScript!"

// 3. toLowerCase and toUpperCase
console.log(text.toLowerCase()); // "  hello javascript!  "
console.log(text.toUpperCase()); // "  HELLO JAVASCRIPT!  "

// 4. includes
console.log(text.includes("Java")); // true

// 5. indexOf and lastIndexOf
console.log(text.indexOf("l"));      // 3
console.log(text.lastIndexOf("l"));  // 9

// 6. startsWith and endsWith
console.log(text.trim().startsWith("Hello")); // true
console.log(text.trim().endsWith("!"));       // true

// 7. slice and substring
console.log(text.slice(2, 7));      // "Hello"
console.log(text.substring(2, 7));  // "Hello"

// 8. replace and replaceAll
const msg = "spam spam spam";
console.log(msg.replace("spam", "egg"));      // "egg spam spam"
console.log(msg.replaceAll("spam", "egg"));   // "egg egg egg"

// 9. split and join
const csv = "red,green,blue";
const colors = csv.split(",");
console.log(colors); // [ 'red', 'green', 'blue' ]
console.log(colors.join(" | ")); // "red | green | blue"

// 10. repeat and pad
console.log("abc".repeat(3));      // "abcabcabc"
console.log("42".padStart(5, "0")); // "00042"
console.log("42".padEnd(5, "."));   // "42..."

// 11. charAt and charCodeAt
console.log("Hi".charAt(1));     // "i"
console.log("Hi".charCodeAt(1)); // 105

// 12. template literals
const name1 = "Alice";
console.log(`Hello, ${name1}!`); // "Hello, Alice!"