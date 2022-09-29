$(function () {

  $('.about__slider').slick({
    draggable: false,
    slidesToShow: 3,
    infinite: true,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow:1,
        }
      }
    ]  
  });

  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open')) {
      $('.burger').addClass('burger--follow')
    } else  {
      $('.burger').removeClass('burger--follow')
    }
  }, 0);


  $('.slick-prev').on('click', function(e) {
    e.preventDefault ()
    $('.about__slider').slick('slickPrev')
  })

  $('.slick-next').on('click', function(e){
    e.preventDefault ()
    $('.about__slider').slick('slickNext')
  })

  var mixer = mixitup('.blogs__list');

  $('.blogs__filter-btn').on('click', function() {
    $('.blogs__filter-btn').removeClass('blogs__filter-btn--active')
    $(this).addClass('blogs__filter-btn--active')
  })

  $('.burger, .overlay, .header__top-link, .header__top-logo').on('click', function(e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
  })

  $('.footer__list-title').on('click', function() {
    $(this).next().slideToggle()
    $(this).parent().toggleClass('footer__column--active')
  })

  $()
  
})