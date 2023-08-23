$(document).ready(function() {
    $('.banner').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      dots: false,
    });
 
    $('.cardContainer').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      dots: false,
    });
  });
  
  