"use strict";

// Modal window

const openModalButton = document.querySelector(".details__button");
const closeModalButton = document.querySelector(".modal__close");
const modal = document.querySelector(".modal");
const modalForm = document.querySelector(".modal__form");
const body = document.querySelector(".page");

const openModal = () => {
    modal.classList.remove("hidden");
    closeModalButton.addEventListener("click", closeModal);
    document.addEventListener("keyup", escPressHandler);
    document.addEventListener("click", windowClickHandler);
    body.style.overflow = "hidden";
}

const closeModal = () => {
    modal.classList.add("hidden");
    closeModalButton.removeEventListener("click", closeModal)
    document.removeEventListener("keyup", escPressHandler);
    document.removeEventListener("click", windowClickHandler);
    modalForm.reset();
    body.style.overflow = "visible";
}

const escPressHandler = (evt) => {
    if (evt.code === `Escape`) {
        closeModal();
    }
    if (evt.code === `Escape`) {
        window.server.closeThanksModal();
    }
}

const windowClickHandler = (evt) => {
    const target = evt.target;
    if (target === modal) {
        closeModal();
    }
}

openModalButton.addEventListener("click", openModal)

window.main = {
  closeModal,
  escPressHandler,
}
