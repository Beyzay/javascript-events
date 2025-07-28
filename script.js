// Mouse Events
// Update the message when the button is hovered over and when the hover ends

let hoverBtn = document.getElementById("hover-btn");
let hoverBtnMsg = document.getElementById("hover-btn-msg");

hoverBtn.addEventListener("mouseenter", () => {
    hoverBtnMsg.textContent = "Congrats! You've revealed a secret message.";
    hoverBtnMsg.style.backgroundColor = "#50ffda";
});

hoverBtn.addEventListener("mouseleave", () => {
    hoverBtnMsg.textContent = "Not hovering... Hover over the button to rediscover.";
    hoverBtnMsg.style.backgroundColor = "";
});

// ---------------------------------------------------------------------------------------------------- //
// Keyboard Events
// Display the last key pressed by the user inside the input field

let keyInput = document.getElementById("key-input");
let keyInputMsg = document.getElementById("key-input-msg");

keyInput.addEventListener("keydown", (e) => {
    keyInputMsg.textContent = "Last key pressed: " + e.key;
});

