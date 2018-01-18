var buttonBurger = document.querySelector(".button-burger");
var menu = document.querySelector(".main-nav__list");
var icon = document.querySelector(".button-burger__icon");

//показывает кнопку бургер
buttonBurger.classList.remove("button-burger--no-js");

//прячет меню
menu.classList.add("main-nav__list--close");

buttonBurger.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.toggle("main-nav__list--close");

  //открытое меню
  if (!menu.classList.contains("main-nav__list--close")) {
    //превращаем бургер в крестик
    icon.classList.add("button-burger__icon--open");

    //показываем пункты меню
    menu.classList.remove("main-nav__list--close");

  }

  //закрытое меню
  if (menu.classList.contains("main-nav__list--close")) {
    //превращаем обратно в бургер
    icon.classList.remove("button-burger__icon--open");

    //скрываем меню
    menu.classList.add("main-nav__list--close");
  }
});
