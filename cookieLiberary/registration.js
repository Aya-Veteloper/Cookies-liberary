document.addEventListener("DOMContentLoaded", () => {
  const registrationForm = document.getElementById("registrationForm");

  registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const color = document.querySelector('select[name="color"]').value;

    cookieHandler.setCookie("username", username, 365);
    cookieHandler.setCookie("gender", gender, 365);
    cookieHandler.setCookie("color", color, 365);

    location.href = "profile.html";
  });
});
