const form = document.getElementById("form-register");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("useremail");
const countryInput = document.getElementById("countryregion");
const messageInput = document.querySelector("textarea");
const agreeCheckbox = document.getElementById("iagree");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = usernameInput.value.trim();
  if (username.length < 4) {
    alert("Username must atleast contains 4 characters.");
    return;
  }

  const email = emailInput.value.trim();
  if (!email.endsWith("@gmail.com")) {
    alert("Email ID must ends with @gmail.com");
    return;
  }

  const countryRegion = countryInput.value.trim();
  if (countryRegion === "") {
    alert("Please fill in the Country Region field.");
    return;
  }

  const message = messageInput.value.trim();
  if (message.split(" ").length < 5) {
    alert("Message must contain at least 5 words.");
    return;
  }

  if (!agreeCheckbox.checked) {
    alert("Please agree to the terms and conditions.");
    return;
  }

  alert("Feedbacks Successfully Submited, Thankyou for your Feedbacks !");
  window.location.href = "home.html";
});

const inputs = document.querySelectorAll(".input");

function focus() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blur() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focus);
  input.addEventListener("blur", blur);
});
