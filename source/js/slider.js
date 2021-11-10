"use strict";

const slides = document.querySelectorAll(".slider__description");
const sliderButtonPrevious = document.querySelector(".slider__button-left");
const sliderButtonNext = document.querySelector(".slider__button-right");
const total = document.querySelector("#total");
const current = document.querySelector("#current");
const texts = document.querySelectorAll(".slider__information-header");
const slidesInner = document.querySelector(".slider__inner");
const slidesWrapper = document.querySelector(".slider__wrapper");
const width = window.getComputedStyle(slidesInner).width;
let currentSlide = 1;
let currentText = 1;
let offset = 0;

// VARIANT 1 OF SLIDER

/*const showSlidesQuantity = () => {
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
})*/

// VARIANT 2 OF SLIDER

slidesWrapper.style.width = 600 * slides.length + "px";
slidesWrapper.style.display = "flex";
slidesInner.style.overflow = "hidden";
slidesWrapper.style.transition = "0.5s all";

sliderButtonNext.addEventListener("click", () => {
  if (offset === +width.slice(0, width.length - 2) * (slides.length - 1)) {
    offset = 0;
  }  else {
    offset = offset + +width.slice(0, width.length - 2);
  }
  slidesWrapper.style.transform = `translateX(-${offset}px)`

  if (currentSlide === slides.length) {
    currentSlide = 1;
  } else {
    currentSlide++;
  }
  if (slides.length < 10) {
    current.textContent =  `0${currentSlide}`;
  } else {
    current.textContent =  currentSlide;
  }
  changeTexts(-1);
})

sliderButtonPrevious.addEventListener("click", () => {
  if (offset === 0) {
    offset = +width.slice(0, width.length - 2) * (slides.length - 1)
  }  else {
    offset = offset - +width.slice(0, width.length - 2);
  }
  slidesWrapper.style.transform = `translateX(-${offset}px)`

  if (currentSlide === 1) {
    currentSlide = slides.length;
  } else {
    currentSlide--;
  }

  if (slides.length < 10) {
    current.textContent =  `0${currentSlide}`;
  } else {
    current.textContent = currentSlide;
  }
  changeTexts(+1);
})

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
