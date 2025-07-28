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

// ---------------------------------------------------------------------------------------------------- //
// Form Events
// Handle form submission (Display a submission message without refreshing the page)

let couponForm = document.getElementById("coupon-form");
let couponFormSuccessMsg = document.getElementById("coupon-form-success-msg");

couponForm.addEventListener("submit", (e) => {
    // Prevent default page reload
    e.preventDefault();

    // Clear previous success message
    couponFormSuccessMsg.textContent = ""

    // Display a success message
    couponFormSuccessMsg.textContent = "Coupon code submitted."
    console.log("Coupon form submitted");
    
    // Clear form
    couponForm.reset();
});

// ---------------------------------------------------------------------------------------------------- //
// Focus and Blur Events
// Update the message when the input field gains or loses focus

let focusInput = document.getElementById("focus-input");
let focusInputMsg = document.getElementById("focus-input-msg");

focusInput.addEventListener("focus", () => {
    focusInput.placeholder = "🔮"
    focusInput.classList.add("dim-placeholder");
    focusInputMsg.textContent = "You're focused on the input now."
});

focusInput.addEventListener("blur", () => {
    focusInput.placeholder = "Focus here (not just telepathically)"
    focusInputMsg.textContent = "Lost focus... Focus on the input to rediscover."
});

// ---------------------------------------------------------------------------------------------------- //
// Event Delegation
// Handle clicks on each button (Display a unique message for each)

let delegationBtnContainer = document.getElementById("delegation-btn-container");
let delegationBtnMsg = document.getElementById("delegation-btn-msg");

delegationBtnContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        delegationBtnMsg.textContent = "Activated " + e.target.textContent + "!";
    }
});

// ---------------------------------------------------------------------------------------------------- //