// Инициализируем Swiper
let myImageSlider = new Swiper(".image-slider", {
  // Стрелки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  // mousewheel: {
  //   sensitivity: 0,
  //   // eventTarget: ".image_slider",
  // },
  slidesPerView: 3,
  watchOverfloc: true,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    stopOnLast: true,
    disableOnInteraction: false,
  },
  spead: 800,
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
});
