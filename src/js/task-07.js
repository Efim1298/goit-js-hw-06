const changeInput = document.querySelector("input#font-size-control");
const spanText = document.querySelector("span#text");

changeInput.addEventListener("change", (e) => {
  spanText.style.fontSize = `${e.target.value}px`;
});
