const form = document.getElementById("newsletter-form");
const subsInfoDiv = document.querySelector(".success");
const formEl = document.querySelector(".form-container");
const imgContainer = document.querySelector(".image-container");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission
  
  const emailInput = document.querySelector(".email-input");
  const email = emailInput.value;

  // Simple email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  formEl.style.display = "none"; // Hide the form container
  imgContainer.style.display = "none"; // Hide the image container

  subsInfoDiv.style.display = "flex";
  let element = ` <img class="success-icon"
    src="./assets/images/icon-success.svg"
    alt="Success icon"
    />
    <h1>Thanks for<br>subscribing!</h1>
    <p>A confirmation email has been sent to <b>${email}</b>. 
    Please open it and click the button inside to confirm your subscription.
    </p>
    <button class="dismiss-btn">Dismiss message</button>
  `;
  subsInfoDiv.innerHTML = element;
  const dismissButton = document.querySelector(".dismiss-btn");
  dismissButton.addEventListener("click", () => {
    subsInfoDiv.style.display = "none";
    formEl.style.display = "initial"; // Show the form container again
    imgContainer.style.display = "initial"; // Show the image container again
  });

  emailInput.value = ""; // Clear the input field
});
