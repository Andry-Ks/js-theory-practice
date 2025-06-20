// DOM Basics: interacting with the Document Object Model

// 1. Accessing elements

// By ID
const header = document.getElementById("header");
console.log(header);

// By class name (returns HTMLCollection)
const items = document.getElementsByClassName("item");
console.log(items);

// By tag name
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

// Using querySelector (returns first match)
const firstItem = document.querySelector(".item");
console.log(firstItem);

// Using querySelectorAll (returns NodeList)
const allItems = document.querySelectorAll(".item");
console.log(allItems);

// 2. Changing content

header.textContent = "Updated Header Text";
header.innerHTML = "<em>Italic header</em>";

// 3. Changing styles
header.style.color = "blue";
header.style.fontSize = "24px";

// 4. Creating new elements
const newDiv = document.createElement("div");
newDiv.textContent = "I am a new div";
document.body.appendChild(newDiv);

// 5. Removing elements
// Remove first paragraph
const firstParagraph = document.querySelector("p");
if (firstParagraph) {
  firstParagraph.remove();
}

// 6. Traversing DOM
const parent = newDiv.parentElement;
const nextSibling = newDiv.nextElementSibling;
const children = document.body.children;

console.log(parent, nextSibling, children);

// 7. Attributes
newDiv.setAttribute("id", "newDiv");
console.log(newDiv.getAttribute("id"));
newDiv.removeAttribute("id");

// 8. Classes
newDiv.classList.add("highlight");
newDiv.classList.remove("highlight");
newDiv.classList.toggle("active");

console.log(newDiv.classList.contains("active"));