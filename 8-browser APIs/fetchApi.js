// Using fetch API to make HTTP requests

// 1. Basic GET request
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) throw new Error("Network error");
    return response.json();
  })
  .then((data) => {
    console.log("Post title:", data.title);
  })
  .catch((error) => {
    console.error("Fetch failed:", error.message);
  });

// 2. GET request with async/await
async function loadUser(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) throw new Error("User not found");

    const user = await res.json();
    console.log("User name:", user.name);
  } catch (err) {
    console.error("Error:", err.message);
  }
}

loadUser(1);

// 3. POST request
async function createPost() {
  const newPost = {
    title: "New Post",
    body: "This is a post created via fetch",
    userId: 1,
  };

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });

    const data = await res.json();
    console.log("Created post:", data);
  } catch (err) {
    console.error("Failed to create post:", err.message);
  }
}

createPost();