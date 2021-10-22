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

// Form

const catalogForm = document.querySelector(".catalog__form")

catalogForm.addEventListener("submit", submitForm);
