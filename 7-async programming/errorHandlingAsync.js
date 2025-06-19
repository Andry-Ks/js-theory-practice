// Error handling in async/await

// 1. Basic try/catch around await
async function getUserData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }

    const user = await response.json();
    console.log("User name:", user.name);
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

getUserData();

// 2. Handling rejected promises
async function alwaysFails() {
  return Promise.reject("This failed");
}

async function handleFailure() {
  try {
    const result = await alwaysFails(); // will throw
    console.log(result);
  } catch (err) {
    console.warn("Handled rejection:", err);
  }
}

handleFailure();

// 3. Try/catch inside .then/.catch chain (not needed with async/await)
fetch("https://jsonplaceholder.typicode.com/posts/1000") // ID doesn't exist
  .then((res) => {
    if (!res.ok) throw new Error("Not found");
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error("Error in promise chain:", err.message);
  });

// 4. Combining async/await + catch at the call site
async function fetchPost(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!response.ok) throw new Error("Post not found");
  return await response.json();
}

fetchPost(1)
  .then((post) => console.log("Title:", post.title))
  .catch((err) => console.error("Error:", err.message));

// 5. Silent errors in async functions if not caught
async function silentFail() {
  throw new Error("Oops, silent fail!");
}

silentFail(); // will fail silently unless caught or `.catch(...)` is used

// Good practice: always catch async errors
silentFail().catch((e) => console.error("Caught silent fail:", e.message));