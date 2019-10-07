$(document).ready(function () {
  // $(document).ready(function () {

  $('.menu__btn').click(function () {
    event.preventDefault();
    $('.menu').toggleClass('active');
    // $('.menu').slideToggle(200);
    $(this).toggleClass('active');
    console.log('+');
  });

  // $(window).on('scroll', function () {
  //   if ($(window).scrollTop() >= 200) {
  //     $('.page-header__wrap').addClass('scrolled');
  //   } else {
  //     $('.page-header__wrap').removeClass('scrolled');
  //   }
  // });

  //   $(window).on('scroll', function () {
  //     if ($(window).scrollTop() >= 150) {
  //       $('.page-header__wrap').addClass('active');
  //     } else {
  //       $('.page-header__wrap').removeClass('active');
  //     }
  //   });

  //   if ($(window).width() < 1024) {
  //     $('.main-nav__link--submenu').click(function () {
  //       $(this).toggleClass('active').closest('.main-nav__item').find('.main-nav__submenu').slideToggle();
  //     });
  //   } else if ($(window).width() >= 1024) {
  //     $('.main-nav__link--submenu').mouseenter(function () {
  //       $(this).addClass('active').closest('.main-nav__item').find('.main-nav__submenu').stop().slideDown();;
  //     });

  //     $('.main-nav__item.has-submenu').mouseleave(function () {
  //       $(this).find('.main-nav__link--submenu').removeClass('active');
  //       $(this).find('.main-nav__submenu').stop().slideUp();
  //     });
  //   }

  //   $('.form-price input[name=container]').on('change', function() {
  //     // let checkedContainer = $('.form-price input[name=container]:checked').val();

  //     if ($('.form-price input[name=container]:checked').val() == 'FCL') {
  //       $('.fcl-show').fadeIn(150);
  //     } else {
  //       $('.fcl-show').fadeOut(150);
  //     }
  //   });

});
