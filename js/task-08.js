// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const loginFormEl = document.querySelector(".login-form");

function getDataForm(e) {
  e.preventDefault();
  const { email, password } = e.target.elements;
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirm =
    emailValue || passwordValue ? "" : alert("Треба заповнити всі поля!");

  const data = {
    [email.name]: emailValue,
    [password.name]: passwordValue,
  };
  console.log(data);
  e.currentTarget.reset();
}
loginFormEl.addEventListener("submit", getDataForm);
