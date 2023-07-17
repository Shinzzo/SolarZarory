const messages = [
  "Hello, how are you?",
  "I'm here to assist you.",
  "Feel free to ask any questions!",
  "I hope you find this helpful."
];

let currentMessageIndex = -1;
let currentCharacterIndex = 0;
let typingSpeed = 50; // Adjust typing speed (in milliseconds) here

let cursorTimeout;

document.addEventListener("keypress", handleKeyPress);

function handleKeyPress(event) {
  if (event.key === "Enter" || event.keyCode === 13) {
    clearTimeout(cursorTimeout);

    currentMessageIndex++;
    if (currentMessageIndex >= messages.length) {
      currentMessageIndex = 0; // Restart the messages loop
    }

    currentCharacterIndex = 0;
    printMessage();
  }
}

function printMessage() {
  const output = document.getElementById("output");
  const message = messages[currentMessageIndex];

  output.innerHTML = message.substring(0, currentCharacterIndex) + "<span class='cursor'>|</span>";

  if (currentCharacterIndex < message.length) {
    currentCharacterIndex++;
    cursorTimeout = setTimeout(printMessage, typingSpeed);
  }
}

