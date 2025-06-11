// Useful Array Methods in JavaScript

const numbers = [1, 2, 3, 4, 5];

// 1. forEach - runs a function for each item (no return)
numbers.forEach(function (n) {
  console.log("forEach:", n);
});

// 2. map - returns a new array with modified values
const doubled = numbers.map(function (n) {
  return n * 2;
});
console.log("map:", doubled); // [2, 4, 6, 8, 10]

// 3. filter - returns a new array with elements that match the condition
const evens = numbers.filter(function (n) {
  return n % 2 === 0;
});
console.log("filter:", evens); // [2, 4]

// 4. reduce - reduces array to a single value
const sum = numbers.reduce(function (acc, curr) {
  return acc + curr;
}, 0);
console.log("reduce:", sum); // 15

// 5. find - returns the first matching element
const firstEven = numbers.find(function (n) {
  return n % 2 === 0;
});
console.log("find:", firstEven); // 2

// 6. some - returns true if any item matches condition
const hasNegative = numbers.some(function (n) {
  return n < 0;
});
console.log("some:", hasNegative); // false

// 7. every - returns true if all items match condition
const allPositive = numbers.every(function (n) {
  return n > 0;
});
console.log("every:", allPositive); // true

// 8. sort - sorts array (mutates original)
const unsorted = [3, 1, 4, 2];
unsorted.sort(); // default = string sort
console.log("default sort:", unsorted); // [1, 2, 3, 4]

// fix for numbers:
unsorted.sort((a, b) => a - b);
console.log("numeric sort:", unsorted); // [1, 2, 3, 4]

// 9. includes - checks for value
console.log(numbers.includes(3)); // true

// 10. concat - merges arrays
const more = [6, 7];
const combined = numbers.concat(more);
console.log("concat:", combined); // [1,2,3,4,5,6,7]

// 11. slice - returns part of the array (non-destructive)
console.log("slice(1, 3):", numbers.slice(1, 3)); // [2, 3]

// 12. splice - removes or replaces items (destructive)
const items = [10, 20, 30, 40];
items.splice(1, 2, 99, 88); // remove 2, insert 99, 88
console.log("splice:", items); // [10, 99, 88, 40]