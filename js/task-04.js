let counterValue = 0;

const decrementEll = document.querySelector('[data-action="decrement"]');
const incrementEll = document.querySelector('[data-action="increment"]');
const valueEll = document.querySelector("#value");

decrementEll.addEventListener("click", decrement);
incrementEll.addEventListener("click", increment);

function decrement() {
  counterValue -= 1;
  valueEll.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  valueEll.textContent = counterValue;
}
