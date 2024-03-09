'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);





// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});





// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}







document.addEventListener('DOMContentLoaded', function () {
  const prevBtns = document.querySelectorAll('.prev-btn');
  const nextBtns = document.querySelectorAll('.next-btn');
  const sliders = document.querySelectorAll('.slider-item');
  let slideIndex = 0;

  for (let i = 0; i < prevBtns.length; i++) {
    prevBtns[i].addEventListener('click', function () {
      showSlider(slideIndex -= 1);
    });
  }

  for (let i = 0; i < nextBtns.length; i++) {
    nextBtns[i].addEventListener('click', function () {
      showSlider(slideIndex += 1);
    });
  }

  function showSlider(n) {
    if (n >= sliders.length) {
      slideIndex = 0;
    } else if (n < 0) {
      slideIndex = sliders.length - 1;
    }
    sliders.forEach((slider) => {
      slider.classList.remove('active');
    });
    sliders[slideIndex].classList.add('active');
  }

  // Automatic slide change every 3 seconds
  let slideInterval = setInterval(function () {
    showSlider(slideIndex += 1);
  }, 3000);

  // Pause and restart on button clicks
  function pauseSlider() {
    clearInterval(slideInterval);
  }

  prevBtns.forEach(btn => btn.addEventListener('click', pauseSlider));
  nextBtns.forEach(btn => btn.addEventListener('click', pauseSlider));
});
