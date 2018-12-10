
$('.tab_li').click(function(){
    var numElement = 1 + $('.tab_li').index(this);
    $('.tab_li_active').toggleClass('tab_li_active', false);
    $(this).toggleClass("tab_li_active");
    $('.article_active').toggleClass('article_active', false);
    $('.art' + numElement).toggleClass('article_active');
});

$('.tab_li').hover(function(){
    $(this).toggleClass("tab_li_hover");
});

// forms tooltip

$('.input__form').mouseover(function() {
    var numElement = 1 + $('.input__form').index(this);
    $('.tool_focus').toggleClass('tool_focus', false);
    $('.tool' + numElement).toggleClass('tool_focus');
}).mouseout(function() {
    $('.tool_focus').toggleClass('tool_focus', false);
});

$('form button').click(function() {
    $('.tool').toggleClass('tool_focus');
})
