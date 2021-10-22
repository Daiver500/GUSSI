"use strict";

// Counter value and price

const MAX_VALUE = 100;
const MIN__VALUE = 1;
const UNIT_PRICE = 120
const priceAmount = document.querySelector(".price__amount");

let counter = 1;
counterInput.value = counter;

const updateCounterInputValue = () => {
    if (counter <= MAX_VALUE && counter >= MIN__VALUE) {
        counterInput.value = counter;
    } else {
        counter = 1;
    }
}

const clickCounterButtonPlus = () => {
    updateCounterInputValue(++counter);
    getPrice();
    console.log(counter)
}

const clickCounterButtonMinus = () => {
    updateCounterInputValue(--counter);
    getPrice();
    console.log(counter)
}

const getPrice = () => {
    priceAmount.textContent = Math.floor(UNIT_PRICE * counter)
}

counterButtonPlus.addEventListener("click", clickCounterButtonPlus);
counterButtonMinus.addEventListener("click", clickCounterButtonMinus);
counterInput.addEventListener("input", () => {
    counterInput.value = "";
})
