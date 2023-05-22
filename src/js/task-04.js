let counterValue = 0;

const refCounter = document.querySelector("#value");
const incButton = document.querySelector('button[data-action="increment"]');
const decButton = document.querySelector('button[data-action="decrement"]');

incButton.addEventListener("click", () => {
  counterValue++;
  refCounter.textContent = counterValue;
});

decButton.addEventListener("click", () => {
  counterValue--;
  refCounter.textContent = counterValue;
});
