document.addEventListener("DOMContentLoaded", () => {
  // Select the form and feedback division
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  // Add event listener for form submission
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission

      // Retrieve user inputs and trim them
      const username = document.getElementById("username").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      // Initialize validation variables
      let isValid = true;
      const messages = [];

      // Username validation
      if (username.length < 3) {
        isValid = false;
        messages.push("Username must be at least 3 characters long.");
      }

      // Email validation
      if (!email.includes("@") || !email.includes(".")) {
        isValid = false;
        messages.push("Email must include '@' and '.'.");
      }

      // Password validation
      if (password.length < 8) {
        isValid = false;
        messages.push("Password must be at least 8 characters long.");
      }

      // Display feedback
      if (feedbackDiv) {
        feedbackDiv.style.display = "block";

        if (isValid) {
          feedbackDiv.textContent = "Registration successful!";
          feedbackDiv.style.color = "#28a745"; // Green
        } else {
          feedbackDiv.innerHTML = messages.join("<br>");
          feedbackDiv.style.color = "#dc3545"; // Red
        }
      }
    });
  }
});
