"use strict";

// Accordeon (dynamic) with data from JSON file

let accordionItems;                    // пустая переменная для будущих элементов
const accordionWrapper = document.querySelector(".catalog__list");

/*const serverRequest = () => {                           // работа с данными сервера
    const request = new XMLHttpRequest();
    request.open(`GET`, "https://jsonplaceholder.typicode.com/posts/1/comments");
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
serverRequest()*/

const data = [
    {
        "id": 1,
        "title": "Delivery",
        "text": "Delivered on or before Monday, 25 February 2019 Note: Subject to placing your order before specific cut-off times. Details available in checkout.For freedelivery – spend over £18.08"
    },
    {
        "id": 2,
        "title": "Return",
        "text": "Return through your local Boxberry store available in over 2,300 locations.You can create your return on the carrier website by clicking the create return link.Open 7 days a week, early until late."
    },
    {
        "id": 3,
        "title": "Guarantee",
        "text": "12 months since receive of the goods"
    }
]

/*const createElement = (item) => {                              // первый способ создания карточек
    const newElement = document.createElement("li");
    newElement.classList.add("list__item");
    newElement.innerHTML = `
    <h3 class="list__title">${item.name}</h3>
    <p class="list__text">${item.body}</p>
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
fillAccordionList(data)*/

const createAccordionElement = (data) => {                             // создаем карточку на основе моковых данных
  data.forEach(({title, text}) => {
    const newElement = document.createElement("li");
    newElement.classList.add("list__item");
    newElement.innerHTML = `
    <h3 class="list__title">${title}</h3>
    <p class="list__text">${text}</p>
    <button class="list__button" aria-label="open close button">
    `
    accordionWrapper.append(newElement);
  })
}
createAccordionElement(data)



/*const showAccordeonText = () => {                            // простой способ для аккордеона
    accordionItems.forEach(function (item) {
        item.addEventListener("click", function () {
            this.classList.toggle("list__item--active")
        })
    })
}*/

const showAccordeonText = () => {                                               // аккордеон
    const accordionItems = document.querySelectorAll(".list__item");
    accordionItems.forEach(function (item) {                                  // см. CSS по изменеию высоты и замене иконки (catalog --> list__item)
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
showAccordeonText()
