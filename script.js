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
//The advantage to using a DOM is that it can be less confusing if your are trying to style it in a large project; it gives you more customization abilitys for names/id's
//When the user clicks one of the buttons it accivates a function assosiated with that button. Then depending on the puropose of that function it could either create a text tage or it could change so kind of style within the webpage.
//I created the RSVP button. The first c.r.a.p. method I used was Alignment to make sure the button was not in a awkward spot for the person using the website. The second c.r.a.p. method I used was repetition by making the button and text the same color and style as the rest of the webpage.