$(function(){

  $('.slider__top').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: true,
   fade: true,
   asNavFor: '.slider__nav',
   prevArrow:'<button type="button" class="slick-arrow slick-prev"><img src="img/prev.png" alt=""></button>',
   nextArrow:'<button type="button" class="slick-arrow slick-next"><img src="img/next.png" alt=""></button>'
 });
 $('.slider__nav').slick({
   slidesToShow: 6,
   asNavFor: '.slider__top',
   dots: false,
   focusOnSelect: true,
   infinite:true,
   variableWidth: true,
   responsive: [
  {
    breakpoint: 890,
    settings: {
      slidesToShow: 5
    }
  },
  {
    breakpoint: 760,
    settings: {
      slidesToShow: 4
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 3
    }
  },
  {
    breakpoint: 455,
    settings: {
      slidesToShow: 2
    }
  }
]
  });

  $('.header__menu-btn').on('click',function(){
    $('.header__menu ul').slideToggle();
  })
});
