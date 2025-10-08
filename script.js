const message = document.getElementById("message");
const button = document.getElementById("change");

button.addEventListener("click", () => {
  message.textContent = "Now your page uses JavaScript!";
});
