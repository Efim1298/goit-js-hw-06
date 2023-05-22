const checkInput = document.querySelector("#validation-input");

checkInput.addEventListener("blur", (event) => {
  if (event.target.value.length == checkInput.getAttribute("data-length")) {
    checkInput.classList.add("valid");
    checkInput.classList.remove("invalid");
  } else {
    checkInput.classList.remove("valid");
    checkInput.classList.add("invalid");
  }
});
