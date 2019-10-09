$(document).ready(function () {
  // $(document).ready(function () {
  console.log(top);


  $('.menu__btn').click(function () {
    event.preventDefault();
    $('.menu').toggleClass('active');
    $('.menu').slideToggle(200);
    $(this).toggleClass('active');
  });

  $('.service-info__name').click(function () {
    $('.service-info__name').removeClass('active');
    $(this).addClass('active');

    if ($(window).width() < 1023) {
      $('.service-info__text').stop().slideUp(200).removeClass('active');
      $(this).next('.service-info__text').toggleClass('active').stop().slideToggle(200);
    }
    $('.service-info__text').removeClass('active');
    $(this).next('.service-info__text').addClass('active');
  });

  $(window).resize(function () {
    if ($(window).width() > 1023) {
      $('.service-info__text').css('display', 'block');
    } else {
      $('.service-info__text').css('display', 'none');
    }
  });

  new WOW().init();

  $(".service-preview__title--horizontal").lettering();

  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 200) {
      $('.page-header__wrap').addClass('scrolled');
    } else {
      $('.page-header__wrap').removeClass('scrolled');
    }
  });

  $('.scroll-down-button').click(function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top - 90;

    $('body, html').animate({
      scrollTop: top
    }, 200);
  });
});
