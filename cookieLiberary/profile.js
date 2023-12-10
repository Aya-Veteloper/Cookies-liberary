document.addEventListener("DOMContentLoaded", () => {
  const username = cookieHandler.getCookie("username");
  const gender = cookieHandler.getCookie("gender");
  let visits = parseInt(cookieHandler.getCookie("visits")) || 0;
  const color = cookieHandler.getCookie("color");

  const greetingDiv = document.getElementById("greetingUser");
  const profilePic = document.getElementById("profilePic");
  const visitCount = document.getElementById("visitCount");

  greetingDiv.textContent = `${username}`;
  profilePic.src = gender === "male" ? "1.jpg" : "2.jpg";

  visits++;
  cookieHandler.setCookie("visits", visits.toString(), 365);

  visitCount.textContent = visits;

  if (color) {
    greetingDiv.style.color = color;
    visitCount.style.color = color;
  }
});
