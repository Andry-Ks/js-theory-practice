// Scope in JavaScript

// 1. Global scope
let globalVar = "I am global";

function printGlobal() {
  console.log(globalVar); // accessible
}

printGlobal(); // "I am global"

// 2. Function scope
function localScope() {
  let localVar = "I am local";
  console.log(localVar);
}

localScope(); // "I am local"
// console.log(localVar); // ❌ ReferenceError: localVar is not defined

// 3. Block scope with let / const
if (true) {
  let blockVar = "I am block-scoped";
  const blockConst = 42;
  console.log(blockVar);     // OK
  console.log(blockConst);   // OK
}

// console.log(blockVar);   // ❌ ReferenceError
// console.log(blockConst); // ❌ ReferenceError

// 4. var ignores block scope (DO NOT USE var)
if (true) {
  var hoistedVar = "I leak outside the block";
}
console.log(hoistedVar); // "I leak outside the block"

// 5. Nested scopes
function outer() {
  let outerVar = "outside";

  function inner() {
    let innerVar = "inside";
    console.log(outerVar); // accessible
    console.log(innerVar); // accessible
  }

  inner();
  // console.log(innerVar); // ❌ ReferenceError
}

outer();

// 6. Lexical scope: inner functions "see" their parent variables
function lexical() {
  const message = "Hello from lexical scope";

  function nested() {
    console.log(message); // still accessible
  }

  nested();
}

lexical();

// 7. Hoisting and TDZ (Temporal Dead Zone)
function testHoisting() {
  // console.log(a); // ❌ ReferenceError (in TDZ)
  let a = 10;
}

testHoisting();