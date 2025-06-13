// Working with Date in JavaScript

// 1. Creating Date objects
const now = new Date();
console.log(now); // current date and time

const specificDate = new Date("2023-01-01T12:00:00");
console.log(specificDate); // Sun Jan 01 2023 12:00:00

// 2. Get components
console.log(now.getFullYear()); // e.g. 2025
console.log(now.getMonth());    // 0 = January
console.log(now.getDate());     // day of the month
console.log(now.getDay());      // 0 = Sunday
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());

// 3. Set components
const date = new Date();
date.setFullYear(2030);
date.setMonth(11); // December
date.setDate(25);
console.log(date); // updated date

// 4. Timestamps and comparisons
const timestamp = Date.now(); // milliseconds since Jan 1, 1970
console.log(timestamp);

const date1 = new Date("2023-01-01");
const date2 = new Date("2024-01-01");
console.log(date1 < date2); // true

// 5. Difference in time
const diffMs = date2 - date1; // in milliseconds
const diffDays = diffMs / (1000 * 60 * 60 * 24);
console.log(diffDays); // ~365

// 6. Formatting (basic)
console.log(now.toDateString()); // "Wed Jun 11 2025"
console.log(now.toTimeString()); // "13:45:30 GMT+0300 (East Europe Summer Time)"
console.log(now.toISOString());  // "2025-06-11T10:45:30.000Z"

// 7. Custom formatting example
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

console.log(formatDate(new Date())); // "11/06/2025"