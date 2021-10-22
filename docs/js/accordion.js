"use strict";

// Accordeon (dynamic)

let accordionItems;                    // пустая переменная для будущих элементов
const accordionWrapper = document.querySelector(".catalog__list");

const contendData = [                 // массив с информацией с сервера
    {
      id: 1,
      title: "Delivery",
      text: "Delivered on or before Monday, 25 February 2019 Note: Subject to placing your order before specific cut-off times. Details available in checkout.For freedelivery – spend over £18.08"
    },
    {
      id: 2,
      title: "Return",
      text: "Return through your local Boxberry store available in over 2,300 locations.You can create your return on the carrier website by clicking the create return link.Open 7 days a week, early until late."
    },
    {
      id: 3,
      title: "Guarantee",
      text: "12 months since receive of the goods"
    },
]

const createElement = (item) => {
    const newElement = document.createElement("li");
    newElement.classList.add("list__item");
    newElement.innerHTML = `
    <h3 class="list__title">${item.title}</h3>
    <p class="list__text">${item.text}</p>
    <button class="list__button" aria-label="open close button">
    `
    accordionWrapper.append(newElement);
    console.log(accordionWrapper)
}

const fillAccordionList = () => {
    contendData.forEach((item) => {
        createElement(item);
    })
    accordionItems = document.querySelectorAll(".list__item");    // после создания новых элементов записываем их в переменную
}
fillAccordionList()

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
showAccordeonText();
