
(function($){
  $.fn.myCarousel=function(options) {

      var defaults = {
          widthImg: 800,
          carousel: $('.carousel-list'),
          goLeft: $('.left'),
          goRight: $('.right')
      };

      var settings = $.extend(defaults, options);

      var widthImg = settings.widthImg;
      var carousel = settings.carousel;
      var goLeft = settings.goLeft;
      var goRight = settings.goRight;


      var carouselElementsLength = carousel.children().length;
      var maxMargin = -widthImg*2;
      var minMargin = -(carouselElementsLength - 2)*widthImg;

      var marginLeftValue = parseInt(carousel.css('margin-left'));

      var autoMove = setInterval(slideMover, 3000);
      function slideMover() {
          if(marginLeftValue != minMargin) {
          marginLeftValue -= widthImg;
          carousel.animate({'margin-left': marginLeftValue + 'px'}, 500);
          var append = setTimeout(function(){
              carousel.children().first().appendTo(carousel);
              marginLeftValue += widthImg;
              carousel.animate({'margin-left': marginLeftValue + 'px'}, 0);
          },500);
      };
  };

      goLeft.on('click', function() {
          if(marginLeftValue != maxMargin) {
          marginLeftValue += widthImg;
          carousel.animate({'margin-left': marginLeftValue + 'px'}, 500);
          var append = setTimeout(function(){
              carousel.children().last().prependTo(carousel);
              marginLeftValue -= widthImg;
              carousel.animate({'margin-left': marginLeftValue + 'px'}, 0);
          },500);
      };
  });

      goRight.on('click', function() {
          if(marginLeftValue != minMargin) {
          marginLeftValue -= 800;
          carousel.animate({'margin-left': marginLeftValue + 'px'}, 500);
          var append = setTimeout(function(){
              carousel.children().first().appendTo(carousel);
              marginLeftValue += 800;
              carousel.animate({'margin-left': marginLeftValue + 'px'}, 0);
          },500);
      };
  });
  return this;
};
})(jQuery);
