console.log("script.js is connected");
function handleRSVP() {
  const existingMessage = document.querySelector(".feedback-message");
  if (existingMessage) {
    return;
  }
  const message = document.createElement("p");
  message.textContent = "You're on the list - see you there!";
  message.classList.add("feedback-message");
  const rsvpButton = document.getElementById("rsvpBtn");
  rsvpButton.after(message);
}