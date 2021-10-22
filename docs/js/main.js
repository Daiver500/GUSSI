"use strict";

// Modal window

const openModalButton = document.querySelector(".details__button");
const closeModalButton = document.querySelector(".modal__close");
const closeSuccessModalButton = document.querySelector(".modal-success__close");
const modal = document.querySelector(".modal");
const modalForm = document.querySelector(".modal__form");
const modalSuccess = document.querySelector(".modal-success");
const body = document.querySelector(".page")

const openModal = () => {
    modal.classList.remove("hidden");
    closeModalButton.addEventListener("click", closeModal);
    document.addEventListener("keyup", escPressHandler);
    document.addEventListener("click", windowClickHandler);
    modalForm.addEventListener("submit", submitForm);
    body.style.overflow = "hidden";
}

const closeModal = () => {
    modal.classList.add("hidden");
    closeModalButton.removeEventListener("click", closeModal)
    document.removeEventListener("keyup", escPressHandler);
    document.removeEventListener("click", windowClickHandler);
    modalForm.removeEventListener("submit", submitForm);
    modalForm.reset();
    body.style.overflow = "visible";
}

const escPressHandler = (evt) => {
    if (evt.code === `Escape`) {
        closeModal();
    }
    if (evt.code === `Escape`) {
        closeSuccessModal();
    }
}

const windowClickHandler = (evt) => {
    const target = evt.target;
    if (target === modal) {
        closeModal();
    }
    if (target === modalSuccess) {
        closeSuccessModal();
    }
}

openModalButton.addEventListener("click", openModal)

const openSuccessModal = () => {
    modalSuccess.classList.remove("hidden");
    closeSuccessModalButton.addEventListener("click", closeSuccessModal);
    document.addEventListener("keyup", escPressHandler);
    document.addEventListener("click", windowClickHandler);
    body.style.overflow = "hidden";
}

const closeSuccessModal = () => {
    modalSuccess.classList.add("hidden");
    closeSuccessModalButton.removeEventListener("click", closeSuccessModal);
    document.addEventListener("keyup", escPressHandler);
    document.addEventListener("click", windowClickHandler);
    body.style.overflow = "visible";
}

const submitForm = (evt) => {
    evt.preventDefault();
    closeModal();
    openSuccessModal();
    modalForm.reset();
    catalogForm.reset();
}

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

// Accordeon

const accordionItems = document.querySelectorAll(".list__item");

const showAccordeonText = () => {
    accordionItems.forEach(function (item) {
        item.addEventListener("click", function () {
            this.classList.toggle("list__item--active")
        })
    })
}
showAccordeonText();


// Form

const catalogForm = document.querySelector(".catalog__form")

catalogForm.addEventListener("submit", submitForm);
