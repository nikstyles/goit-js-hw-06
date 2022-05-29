// Напиши скрипт, который при потере фокуса на инпуте
// (событие blur), проверяет его содержимое на правильное
// количество введённых символов.

// Сколько символов должно быть в инпуте, указывается
// в его атрибуте data - length.
// Если введено подходящее количество символов, то border
// инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и
// invalid, которые мы уже добавили в исходные файлы задания.

const inputEl = document.querySelector("#validation-input");
const lengthEl = Number(inputEl.dataset.length);

// inputEl.addEventListener("blur", (even) => {
//   if (even.target.value.trim().length === lengthEl) {
//     inputEl.classList.add("valid");
//     inputEl.classList.remove("invalid");
//   } else if (even.target.value.trim().length !== 0) {
//     inputEl.classList.add("invalid");
//   } else {
//     inputEl.classList.remove("invalid") || inputEl.classList.remove("valid");
//   }
// });

inputEl.addEventListener("blur", (even, add, remove) => {
  if (even.target.value.trim().length === lengthEl) {
    classAdd("valid");
    classRemove("invalid");
  } else if (even.target.value.trim().length !== 0) {
    classAdd("invalid");
  } else {
    classRemove("invalid") || classRemove("valid");
  }
});

function classAdd(classCss) {
  return inputEl.classList.add(classCss);
}
function classRemove(classCss) {
  return inputEl.classList.remove(classCss);
}
