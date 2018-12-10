console.log('ok');

// carousel

$(function(){
    $('.jcarousel')
    .jcarousel({
    center :  true ,
    wrap: 'circular'
    })
    .jcarousel('reload', {
    animation: 'slow'
    });

    $('.jcarousel-pagination')
    .on('jcarouselpagination: active','a',function() {
        console.log('ok');
         $(this).addClass('active');
    })
    .on('jcarouselpagination: inactive','a',function() {
        console.log('ok');
         $(this).removeClass('active');
    })
    .jcarouselPagination({
        'carousel': $('.jcarousel'),
        item: function(page, carouselItems) {
            return '<a href="#' + page + '">' + page + '</a>';
        }
    })

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });
});
// end carousel

// menu 2 level
var hideMenu = {
    showenSecondMenu: $('.goods').mouseover(function(){
        $('.secondMenu').show('fast');
        })
        .mouseout(function(){
        $('.secondMenu').hide();
    }),
    viewSecondMenu: $('.secondMenu').mouseover(function(){
            $(this).show();
            })
            .mouseout(function(){
            $(this).hide();
    }),
    // num: 1 + $('.secondMenu_li').index(this),
    showenThirdMenu: $('.secondMenu_li').mouseover(function(){
        $(this).children().show();
    })
    .mouseout(function(){
        $(this).children().hide();
    }),
    viewThirdMenu: $('.thirdMenu').mouseover(function() {
        $(this).show();
        $('.secondMenu').show();
    })
    .mouseout(function(){
        $(this).hide();
    })
}

// $('.goods').mouseover(function(){
//     $('.secondMenu').show('fast');
// })
// .mouseout(function(){
//     $('.secondMenu').hide();
// })
//
//     $('.secondMenu').mouseover(function(){
//         $(this).show();
//     })
//     .mouseout(function(){
//         $(this).hide();
//     })


        $('.secondMenu_li').mouseover(function(){
            $('.secondMenu_li').show('fast');
        })



// select




// end select
