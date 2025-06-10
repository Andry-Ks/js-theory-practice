// Objects and Arrays Basics in JavaScript

// 1. Object creation using literal syntax
const user = {
  name: "Alice",
  age: 30,
  isAdmin: true,
};

console.log(user.name); // "Alice"
console.log(user["age"]); // 30

// 2. Adding and modifying properties
user.email = "alice@example.com";
user.age = 31;

console.log(user.email); // "alice@example.com"
console.log(user.age);   // 31

// 3. Deleting properties
delete user.isAdmin;
console.log(user.isAdmin); // undefined

// 4. Checking property existence
console.log("name" in user);  // true
console.log("isAdmin" in user); // false

// 5. Looping over object properties with for...in
for (let key in user) {
  console.log(key + ": " + user[key]);
}

// 6. Object.keys, Object.values, Object.entries
console.log(Object.keys(user));   // ['name', 'age', 'email']
console.log(Object.values(user)); // ['Alice', 31, 'alice@example.com']
console.log(Object.entries(user)); // [['name', 'Alice'], ['age', 31], ['email', 'alice@example.com']]

// 7. Arrays - creation
const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // "apple"

// 8. Adding and removing elements
fruits.push("date");
console.log(fruits); // ["apple", "banana", "cherry", "date"]

fruits.pop();
console.log(fruits); // ["apple", "banana", "cherry"]

// 9. Looping over arrays
for (let fruit of fruits) {
  console.log(fruit);
}

// 10. Array methods - forEach, map, filter
fruits.forEach(fruit => console.log(fruit.toUpperCase()));

const filtered = fruits.filter(fruit => fruit.startsWith("b"));
console.log(filtered); // ["banana"]

const mapped = fruits.map(fruit => fruit.length);
console.log(mapped); // [5, 6, 6]

// 11. Multidimensional arrays
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(matrix[1][2]); // 6