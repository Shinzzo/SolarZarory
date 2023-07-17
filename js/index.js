const messages = [
  "Hello, how are you?",
  "I'm here to assist you.",
  "Feel free to ask any questions!",
  "I hope you find this helpful."
];

let currentMessageIndex = -1;

document.addEventListener("keypress", handleKeyPress);

function handleKeyPress(event) {
  if (event.key === "Enter" || event.keyCode === 13) {
    currentMessageIndex++;
    if (currentMessageIndex >= messages.length) {
      currentMessageIndex = 0; // Restart the messages loop
    }

    const output = document.getElementById("output");
    const message = messages[currentMessageIndex];

    const newMessageElement = document.createElement("div");
    newMessageElement.className = "message";
    newMessageElement.textContent = message;

    output.appendChild(newMessageElement);
    output.scrollTop = output.scrollHeight;
  }
}
