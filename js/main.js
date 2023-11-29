const headingElement = document.getElementById("heading");
const inputElement = document.getElementById("input-email");
const buttonElement = document.getElementById("subscribe-button");

buttonElement.addEventListener("click", function (event) {
  let enteredEmail = inputElement.value;

  if (enteredEmail !== "") {
    headingElement.innerText =
      "Thank you! I will send you updates to " + enteredEmail;
  } else {
    headingElement.innerText = "Subscribe to my portfolio updates here";
  }
});
