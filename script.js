$(document).ready(function(){
    $('.menu-button').click(function(){
        $('.sidebar').toggleClass("active");
        $('.open').toggleClass("hide");
        $('.close').toggleClass("show");
    });

    $('.link').click(function(){
        $('.sidebar').toggleClass("active");
        $('.open').toggleClass("hide");
        $('.close').toggleClass("show");
    });

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 400,
        spaceBetween: 0,
        slidesPerView: 5,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          1370: {
            slidesPerView: 2,
            spaceBetween: 0
          },
          // when window width is >= 640px
          1590: {
            slidesPerView: 5,
            spaceBetween: 0
          }
        }
      });
});