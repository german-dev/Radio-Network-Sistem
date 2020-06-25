window.addEventListener("load", function () {
  new Glider(document.querySelector(".carousel__tape"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: ".carousel__index",
    arrows: {
      prev: ".carousel__anterior",
      next: ".carousel__siguiente",
    },
    responsive: [
      {
        // screens greater than >= 768px
        breakpoint: 768,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  });
});
const menuBtn = document.querySelector(".nav-main__menu-btn");
const menuRight = document.querySelector(".nav-main__menu--right");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuRight.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuRight.classList.remove("open");
    menuOpen = false;
  }
});
