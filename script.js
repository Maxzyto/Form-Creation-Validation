document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const message = document.getElementById("message");

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    let isValid = true;
    if (message) {
      message.innerHTML = "";
    }

    // Validate username
    if (!username || username.value.trim() === "") {
      isValid = false;
      if (message) {
        message.innerHTML += "<p>Username is required.</p>";
      }
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email.value.trim())) {
      isValid = false;
      if (message) {
        message.innerHTML += "<p>Invalid email format.</p>";
      }
    }

    if (!password || password.value.length < 6) {
      isValid = false;
      if (message) {
        message.innerHTML +=
          "<p>Password must be at least 6 characters long.</p>";
      }
    }

    if (isValid && message) {
      message.innerHTML = "<p>Form submitted successfully!</p>";
    }
  });
});
