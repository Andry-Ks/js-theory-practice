// Loops in JavaScript

// 1. for loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}

// 2. while loop
let count = 0;
while (count < 3) {
  console.log("while loop:", count);
  count++;
}

// 3. do...while loop
let index = 0;
do {
  console.log("do...while:", index);
  index++;
} while (index < 2);

// 4. for...of — for iterable objects (arrays, strings, etc.)
let fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log("Fruit:", fruit);
}

// 5. for...in — for object keys
let user = {
  name: "Alice",
  age: 25,
};

for (let key in user) {
  console.log(key + ":", user[key]);
}

// 6. break — exit loop early
for (let i = 0; i < 10; i++) {
  if (i === 4) break;
  console.log("Break at 4:", i);
}

// 7. continue — skip current iteration
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log("Skip 2:", i);
}