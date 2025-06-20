// Handling events in the browser

// 1. Selecting an element
const button = document.querySelector("button");

// 2. Adding an event listener
button.addEventListener("click", () => {
  console.log("Button clicked!");
});

// 3. Event object
button.addEventListener("click", (event) => {
  console.log("Event type:", event.type);
  console.log("Event target:", event.target);
});

// 4. Removing an event listener
function onClick() {
  console.log("Clicked!");
  button.removeEventListener("click", onClick);
}
button.addEventListener("click", onClick);

// 5. Event propagation (bubbling)
const parentDiv = document.querySelector("#parent");
const childDiv = document.querySelector("#child");

parentDiv.addEventListener("click", () => {
  console.log("Parent clicked");
});

childDiv.addEventListener("click", (e) => {
  console.log("Child clicked");
  e.stopPropagation(); // Stop bubbling
});

// 6. Event delegation
document.body.addEventListener("click", (e) => {
  if (e.target.matches(".dynamic-button")) {
    console.log("Dynamic button clicked:", e.target);
  }
});

// 7. Keyboard events
window.addEventListener("keydown", (e) => {
  console.log("Key pressed:", e.key);
});