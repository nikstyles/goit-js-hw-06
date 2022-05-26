// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет
// инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться
// размер текста.

const controlEl = document.querySelector("input");
const textEl = document.querySelector("#text");

function controlSizeTextElement(event) {
  console.log("event.target.value");
  textEl.style.fontSize = event.target.value + "px";
}

textEl.style.fontSize = controlEl.value + "px";
controlEl.addEventListener("input", controlSizeTextElement);
