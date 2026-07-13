const form = document.getElementById("joinForm");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // stop default page reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const business = document.getElementById("business").value.trim();
  const level = document.getElementById("level").value;

  if (!name || !email || !business || !level) {
    alert("Please fill in all required fields.");
    return;
  }

  // Simple email validation
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Show confirmation message
  confirmation.textContent = `Thank you, ${name}! Your ${level} membership application has been submitted successfully.`;
  confirmation.style.display = "block";

  // Reset form
  form.reset();
});
