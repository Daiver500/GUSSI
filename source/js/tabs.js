"use strict";

// Tabs

const colorSelectButtons = document.querySelectorAll(".color__button");
const sizeSelectButtons = document.querySelectorAll(".size__button");

const hideColorButtons = () => {
    colorSelectButtons.forEach((button) => {
        button.classList.remove("color__button--active");
    })
}

const hideSizeButtons = () => {
    sizeSelectButtons.forEach((button) => {
        button.classList.remove("size__button--active");
    })
}

const showColorButton = (i = 0) => {
    colorSelectButtons[i].classList.add("color__button--active");
}

const showSizeButton = (i = 1) => {
    sizeSelectButtons[i].classList.add("size__button--active");
}

hideColorButtons();
showColorButton();
hideSizeButtons();
showSizeButton();

const checkButton = (evt) => {
    const target = evt.target;
    if (target && target.classList.contains("color__button")) {
        colorSelectButtons.forEach((button, i) => {
            if (target === button) {
                hideColorButtons();
                showColorButton(i);
            }
        });
    }
    if (target && target.classList.contains("size__button")) {
        sizeSelectButtons.forEach((button, i) => {
            if (target === button) {
                hideSizeButtons();
                showSizeButton(i);
            }
        });
    }
}

colorSelectButtons.forEach((button) => {
    button.addEventListener("click", checkButton)
})

sizeSelectButtons.forEach((button) => {
    button.addEventListener("click", checkButton)
})

// Counter tabs

const counterButtons = document.querySelectorAll(".counter__button");
const counterSvg = document.querySelectorAll(".counter__svg");
const counterInput = document.querySelector(".counter__input");
const counterButtonPlus = document.querySelector(".counter__button-plus");
const counterButtonMinus = document.querySelector(".counter__button-minus");


const hideCounterButton = () => {
    counterButtons.forEach((button) => {
        button.classList.remove("counter__button--active");
    })
}

const showActiveCounterButton = (i = 1) => {
    counterButtons[i].classList.add("counter__button--active");
}

hideCounterButton();
showActiveCounterButton();

const clickOnCounterButton = (evt) => {
    const currentActive = document.querySelector(`.counter__button--active`);
    const target = evt.target.closest(".counter__button");
    if (!target.classList.contains(`counter__button--active`)) {
        currentActive.classList.remove(`counter__button--active`);
        target.classList.add(`counter__button--active`);
    }
};


/*const clickOnCounterButton = (evt) => {
  const target = evt.target.closest(".counter__button");
  if (target && target.classList.contains("counter__button")) {
    counterButtons.forEach((button, i) => {
      if(target === button) {
        hideCounterButton();
        showActiveCounterButton(i);
      }
    })
  }
}*/

counterButtons.forEach((button) => {
    button.addEventListener("click", clickOnCounterButton)
})
