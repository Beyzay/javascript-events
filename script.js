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

