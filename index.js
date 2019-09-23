$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
$(function () {
  var len = $('.slick-dots li button').length;
  for (var i = 0; i < len; i++){
     $('.slick-dots li button')[i].style.backgroundImage = "url(pic/"+(i+1)+".jpg)";   
  };
});   
$(function (){
  $('.header-mob-menu').click(function(){
    $('.header-mob-menu').toggleClass('active');
    $('.header-nav').toggleClass('active');
  })
})