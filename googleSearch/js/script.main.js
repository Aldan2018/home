
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
;console.log('js ok');
$(function () {
  $('.wrapper_button').click(function () {
    sendRequest();
  });
  $('.wrapper_input').keypress(function (e) {
    if (e.keyCode === 13) {
      sendRequest();
    };
  });
});


function sendRequest() {

  var qr = $('.wrapper_input').val();
  $.ajax({
    url: "https://pixabay.com/api/?key="+'10991293-1380241f89abb6f101ebca8b6'+"&q="+qr+"&per_page="+20,
    dataType: 'JSONP',
    method: 'POST',
    success: function (data) {
      var numPic = data.hits;
      createCarousel(numPic);
      if (parseInt(data.totalHits) > 0)
      $.each(data.hits, function(i, hit){
        console.log(hit.pageURL);
      });
      else
      console.log('No hits');
    }
  });
};

function createCarousel(numPic) {
  console.log(numPic);
  $(function(){
    var inner = $('#slider').html();
    var content = tmpl(inner, {data: numPic});
    $('.wrapperCarousel').append(content);



  });
  $(function() {
    $('.carousel').myCarousel({
        widthImg: 800,
        carousel: $('.carousel-list'),
        goLeft: $('.left'),
        goRight: $('.right')
    });
});

};
;// Simple JavaScript Templating
// John Resig - https://johnresig.com/ - MIT Licensed
(function(){
  var cache = {};

  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :

      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +

        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +

        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");

    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();
