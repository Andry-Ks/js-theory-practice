// Variable declarations in JavaScript

// Old way (do not use in modern code)
var oldVar = "I am an old var";
console.log("old var:", oldVar);

// Modern ways
let mutableVariable = 1;
console.log("let (can be changed):", mutableVariable);

const constantVariable = 3.14;
console.log("const (cannot be changed):", constantVariable);

// However, const objects can be mutated
const person = {name: "Alice"};
person.name = "Emma"; // allowed
console.log("modified object:", person);

// Naming rules:
// ✅ letters, $, _
// ❌ cannot start with a number
// ✅ camelCase is the convention

// Types of values that variables can hold
let num = 10;                   //number
let str = "hello world";        //string
let isActive = true;            //boolean
let empty = null;               //null (explicitly empty)
let notAssigned;                //undefined (no value assigned)
let unique = Symbol("id");      //Symbol

let bigInt = 9007199254740991n; // BigInt

console.log(typeof unique);