document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  document.getElementById("formMessage").textContent =
    "Thank you for contacting ABC Secondary School.";
});
