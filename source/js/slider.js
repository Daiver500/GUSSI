"use strict";

const slides = document.querySelectorAll(".slider__description");
const sliderButtonPrevious = document.querySelector(".slider__button-left");
const sliderButtonNext = document.querySelector(".slider__button-right");
const total = document.querySelector("#total");
const current = document.querySelector("#current");
const texts = document.querySelectorAll(".slider__information-header");
let currentSlide = 1;
let currentText = 1;

const showSlidesQuantity = () => {
  if (slides.length < 10) {
    current.textContent = `0${slides.length}`
  } else {
    current.textContent = slides.length;
  }
}
showSlidesQuantity()

const showCurrentSlide = () => {
    if (slides.length < 10) {
      current.textContent = `0${currentSlide}`;
    } else {
      current.textContent = currentSlide;
    }
  }

const showSlides = (slideNumber) => {
  if (slideNumber > slides.length) {
    currentSlide = 1
  }

  if (slideNumber < 1) {
    currentSlide = slides.length
  }

  slides.forEach((slide) => {
    slide.classList.add("hidden");
  })

  slides[currentSlide - 1].classList.remove("hidden");
  showCurrentSlide();
}
showSlides(currentSlide)

const changeSlides = (slideNumber) => {
   showSlides(currentSlide = currentSlide + slideNumber)
}

const showText = (text) => {
    if (text > texts.length) {
        currentText = 1
    }

    if (text < 1) {
        currentText = texts.length
    }

    texts.forEach((text) => {
      text.classList.add("hidden");
    })

    texts[currentText - 1].classList.remove("hidden");
  }
  showText(currentText)

  const changeTexts = (text) => {
    showText(currentText = currentText + text)
 }

sliderButtonPrevious.addEventListener("click", () => {
  changeSlides(-1);
  changeTexts(-1);
})

sliderButtonNext.addEventListener("click", () => {
  changeSlides(+1);
  changeTexts(+1);
})
