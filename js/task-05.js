// Напиши скрипт который, при наборе текста в инпуте
// input#name - input(событие input), подставляет его текущее
// значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка "Anonymous".

let inputEl = document.getElementById("name-input");
let outputEl = document.getElementById("name-output");

inputEl.oninput = function () {
  if (inputEl.value === "") {
    outputEl.innerHTML = "Anonymous";
  } else {
    outputEl.innerHTML = inputEl.value;
  }
};
