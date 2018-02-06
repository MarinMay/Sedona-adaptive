var form = document.querySelector(".form-review");

var thisname = document.querySelector("[name=name]");
var surname = document.querySelector("[name=surname]");
var phone = document.querySelector("[name=phone]");
var email = document.querySelector("[name=email]");

var thisnameStorage = localStorage.getItem("thisname");
var surnameStorage = localStorage.getItem("surname");
var phoneStorage = localStorage.getItem("phone");
var emailStorage = localStorage.getItem("email");

var buttonSubmit = document.querySelector(".form-review__button");

var popupError = document.querySelector(".pop-up--error");
var buttonError = document.querySelector(".pop-up--error .pop-up__button");

var popupSusses = document.querySelector(".pop-up--susses");
var buttonSusses = document.querySelector(".pop-up--susses .pop-up__button");


// прячет окно ошибки и убирает красный фон обязательных полей
function closeModalError() {
  thisname.classList.remove("name__input--error");
  surname.classList.remove("name__input--error");
  phone.classList.remove("user-contact__input--error");
  email.classList.remove("user-contact__input--error");
  popupError.classList.remove("pop-up--show");
}

// проверяет значения LocalStorage и подставляет их если есть
window.onload = function () {
  if (thisnameStorage || surnameStorage || phoneStorage || emailStorage) {
    thisname.value = thisnameStorage;
    surname.value = surnameStorage;
    phone.value = phoneStorage;
    email.value = emailStorage;
  }
};

//проверяет поля, обязательные для заполнения, если пустые делает красный фон
buttonSubmit.addEventListener("click", function (evt) {
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
  if (!email.value || !email.checkValidity()) {
    email.classList.add("user-contact__input--error");
  }
  //показывает модальное окно ошибки
  if (!thisname.value || !surname.value || !phone.value || !email.value || !email.checkValidity()) {
    popupError.classList.add("pop-up--show");
    window.scroll(0, 600);
  } else {
  //если все обязательные поля заполнены показывает сообщение об успехе
    popupSusses.classList.add("pop-up--show");
  }
});

//при нажатии ОК окна ошибки прячет окно ошибки, убирает фон с инпутов
buttonError.addEventListener("click", function (evt) {
  evt.preventDefault();
  closeModalError();
 });

// при нажатии на ОК окна об успехе отправляет форму, прячет его b записывает значения в LocalStorage
buttonSusses.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupSusses.classList.remove("pop-up--show");
  form.submit();
  localStorage.setItem("thisname", thisname.value);
  localStorage.setItem("surname", surname.value);
  localStorage.setItem("phone", phone.value);
  localStorage.setItem("email", email.value);
 });

// скрытие модальных окон по Esc
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupError.classList.contains("pop-up--show")) {
      closeModalError();
    }
    if (popupSusses.classList.contains("pop-up--show")) {
      popupSusses.classList.remove("pop-up--show");
      form.submit();
      localStorage.setItem("thisname", thisname.value);
      localStorage.setItem("surname", surname.value);
      localStorage.setItem("phone", phone.value);
      localStorage.setItem("email", email.value);
    }
  }
});
