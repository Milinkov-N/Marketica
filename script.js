$(document).ready(function(){

  let noscrollIsActive = false;
  let careerIsActive = false;
  let tenderIsActive = false;

  // Включает и отключает адаптивный сайдбар
  $('.menu-button').click(function(){
    $('.sidebar').toggleClass("active");
    $('.open').toggleClass("hide");
    $('.close').toggleClass("show");

    // Проверяем, активно-ли модальное окно - если да, то закрываем его
    if ($('.modal-dialog.career').hasClass('active') === true) {
      $('.modal-dialog.career').toggleClass("active");
      $('body').toggleClass("noscroll");
    };

    // Проверяем, активно-ли модальное окно - если да, то закрываем его
    if ($('.modal-dialog.tender').hasClass('active') === true) {
      $('.modal-dialog.tender').toggleClass("active");
      $('body').toggleClass("noscroll");
    };

    $('body').toggleClass("noscroll");
  });

  // Закрывает адаптивный сайдбар при переходе по ссылке
  $('.link').click(function(){
    $('.sidebar').toggleClass("active");
    $('.open').toggleClass("hide");
    $('.close').toggleClass("show");

    // Проверяем тэг боди на отключенный скролл
    if ($('body').hasClass('noscroll') != true) {
      $('body').toggleClass("noscroll");
    };
  });

  // Активация открытие формы для отправки резюме
  $('.career-button').click(function(){

    // Проверяем, активно-ли модальное окно - если да, то закрываем его
    if ($('.modal-dialog.tender').hasClass('active') === true) {
      $('.modal-dialog.tender').toggleClass("active");
    };

    // Проверяем, активно-ли текущее модальное окно - если нет, то открываем его (защита от повторного нажатия по открывающей кнопке)
    if ($('.modal-dialog.career').hasClass('active') != true) {
      $('.modal-dialog.career').toggleClass("active");
      careerIsActive = true;
    };

    // Проверяем тэг боди на отключенный скролл
    if ($('body').hasClass('noscroll') != true) {
      $('body').toggleClass("noscroll");
    };
  });

  // Закрывает модальное окно для отправки резюме
  $('.career .close').click(function(){
    $('.modal-dialog.career').toggleClass("active");

    // Проверяем тэг боди на отключенный скролл
    if ($('body').hasClass('noscroll') != true) {
      $('body').toggleClass("noscroll");
    } else if (careerIsActive === true) {
      $('body').toggleClass("noscroll");
    }
  });

  // Активация открытие формы для отправки заявки на тендер
  $('.tender-invite').click(function(){

    // Проверяем, активно-ли модальное окно - если да, то закрываем его
    if ($('.modal-dialog.career').hasClass('active') === true) {
      $('.modal-dialog.career').toggleClass("active");
    };

    // Если окно было открыто через сайдбар, то предварительно закрываем его
    if ($('.sidebar').hasClass('active') === true) {
      $('.sidebar').toggleClass("active");
      $('.open').toggleClass("hide");
      $('.close').toggleClass("show");
      $('.modal-dialog.tender').toggleClass("active");

      noscrollIsActive = true;
    } else {
      // Проверяем, активно-ли текущее модальное окно - если нет, то открываем его (защита от повторного нажатия по открывающей кнопке)
      if ($('.modal-dialog.tender').hasClass('active') != true) {
        $('.modal-dialog.tender').toggleClass("active");
        tenderIsActive = true;
      };

      // Проверяем тэг боди на отключенный скролл
      if ($('body').hasClass('noscroll') != true) {
        $('body').toggleClass("noscroll");
      }
    }
  });

  // Закрывает модальное окно для отправки резюме
  $('.tender .close').click(function(){
      $('.modal-dialog.tender').toggleClass("active");

      // Проверяем тэг боди на отключенный скролл
      if ($('body').hasClass('noscroll') != true) {
        $('body').toggleClass("noscroll");
      } else if (noscrollIsActive) {
        $('body').toggleClass("noscroll");
      } else if (tenderIsActive === true) {
        $('body').toggleClass("noscroll");
      }
  });

  document.getElementById('usertel').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    e.target.value = !x[2] ? x[1] : x[1] + ' (' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
  });

  document.getElementById('usertel_career').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    e.target.value = !x[2] ? x[1] : x[1] + ' (' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
  });

  document.getElementById('usertel_tender').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    e.target.value = !x[2] ? x[1] : x[1] + ' (' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
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