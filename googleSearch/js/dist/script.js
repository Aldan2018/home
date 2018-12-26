console.log('js ok');
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
