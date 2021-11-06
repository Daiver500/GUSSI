"use strict";

const slides = document.querySelectorAll(".slider__description");
const sliderButtonPrevious = document.querySelector(".slider__button-left");
const sliderButtonNext = document.querySelector(".slider__button-right");
let currentSlide = 2;

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
}
showSlides()
