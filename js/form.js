var thisname = document.querySelector("[name=name]");
var surname = document.querySelector("[name=surname]");
var phone = document.querySelector("[name=phone]");
var email = document.querySelector("[name=email]");
var buttonSubmit = document.querySelector(".form-review__button");
var popupError = document.querySelector(".pop-up--error");
var buttonError = document.querySelector(".pop-up--error .pop-up__button");
var popupSusses = document.querySelector(".pop-up--susses");
var buttonSusses = document.querySelector(".pop-up--susses .pop-up__button");
var form = document.querySelector(".form-review");

//проверяет поля, обязательные для заполнения, если пустые делает красный фон
buttonSubmit.addEventListener("click", function (evt) {
  console.log("мяу");
  evt.preventDefault();
  if (!thisname.value) {
    thisname.classList.add("name__input--error");
  }
  if (!surname.value) {
    surname.classList.add("name__input--error");
  }
  if (!phone.value) {
    phone.classList.add("user-contact__input--error");
  }
  if (!email.value) {
    email.classList.add("user-contact__input--error");
  }
  //показывает модальное окно ошибки
  if (!thisname.value || !surname.value || !phone.value || !email.value) {
    popupError.classList.add("pop-up--show");
    window.scroll(0, 600);
  } else {
  //если все обязательные поля заполнены отправляет форму и показывает сообщение об успехе
    form.submit();
    popupSusses.classList.add("pop-up--show");
  }
});

//прячет окно ошибки, убирает фон с инпутов
buttonError.addEventListener("click", function (evt) {
  evt.preventDefault();
  thisname.classList.remove("name__input--error");
  surname.classList.remove("name__input--error");
  phone.classList.remove("user-contact__input--error");
  email.classList.remove("user-contact__input--error");
  popupError.classList.remove("pop-up--show");
 });

buttonSusses.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupSusses.classList.remove("pop-up--show");
 });
