// Conditional Statements in JavaScript

// 1. if statement
let age = 20;
if (age >= 18) {
    console.log("you are an adult");
}

// 2. if...else statement
let isLoggedIn = false;
if (isLoggedIn) {
    console.log("Welome");
} else {
    console.log("Please log in");
}

// 3. if...else if...else
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// 4. Ternary operator (shorthand for if...else)
let access = age >= 18 ? "Allowed" : "Denied";
console.log(access);    // "Allowed"

// 5. switch statement
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  default:
    dayName = "Weekend";
}

console.log(dayName); // "Wednesday"

// 6. Nested if
let temperature = 30;
let isRaining = true;

if (temperature > 25) {
  if (isRaining) {
    console.log("Take an umbrella.");
  } else {
    console.log("Enjoy the sun!");
  }
}