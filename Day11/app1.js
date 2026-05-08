const form = document.querySelector("#login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();     // stop the page reload
  console.log("Custom form handling here");
  // ... validate, send via fetch, etc.
});

// Links
const link = document.querySelector("a");
link.addEventListener("click", (e) => {
  e.preventDefault();     // don't navigate
  console.log("Intercepted");
});
