"use strict";

// Accordeon (dynamic) with data from JSON file

let accordionItems;                    // пустая переменная для будущих элементов
const accordionWrapper = document.querySelector(".catalog__list");

const serverRequest = () => {                           // получаем информацию с сервера из JSON файла
    const request = new XMLHttpRequest();
    request.open(`GET`, "js/current.json");
    request.setRequestHeader("Content-type", "application/json; charset=utf-8");
    request.send();
    const checkStateReadiness = () => {
        if (request.status === 200) {
          const data = JSON.parse(request.response)         // переводим данные из JSON в JS объекты
          console.log(data)
          fillAccordionList(data)
          showAccordeonText();
        }
       }
       request.addEventListener("load", checkStateReadiness)
  };
serverRequest()

const createElement = (item) => {
    const newElement = document.createElement("li");
    newElement.classList.add("list__item");
    newElement.innerHTML = `
    <h3 class="list__title">${item.title}</h3>
    <p class="list__text">${item.text}</p>
    <button class="list__button" aria-label="open close button">
    `
    accordionWrapper.append(newElement);
}

const fillAccordionList = (data) => {
    data.forEach((item) => {
        createElement(item);
    })
    accordionItems = document.querySelectorAll(".list__item");    // после создания новых элементов записываем их в переменную
}


/*const showAccordeonText = () => {
    accordionItems.forEach(function (item) {
        item.addEventListener("click", function () {
            this.classList.toggle("list__item--active")
        })
    })
}*/

const showAccordeonText = () => {                                        // см. CSS по изменеию высоты и замене иконки (catalog --> list__item)
    accordionItems.forEach(function (item) {
        item.addEventListener("click", function () {
            if (this.classList.contains("list__item--active")) {           // если есть активный класс убираем по клику
                this.classList.remove("list__item--active");
            } else {
                accordionItems.forEach(function(item){                    // убираем активный класс у всех
                    item.classList.remove("list__item--active");
              });
              this.classList.add("list__item--active");                   // добавляем на элемент по которому кликаем класс active
            }
        })
    })
}

