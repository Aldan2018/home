function start() {
$(function() {
    console.log('getTmpl ok');
    var inr = $('#testTmpl').html();
    var inf = JSON.parse(localStorage.getItem('bibleAsk'));
    var con = tmpl(inr, {data: inf});
    $('.wrapper').append(con);
    $('#check').click(function () {
        getResult.getCheck(inf);
    });
});
};

start();


var getResult = {

    getCheck: function(inf) {
        $('#check').unbind();
        console.log('getCheck ok');
        var num=0;

        for (var i=0; i<inf.length; i++) {
            var name = 'name = answer'+(i+1);
            var answNum = $('input['+name+']:checked').val();
            if (answNum == inf[i].answT) {
                num++;
            }
        };
        var mark = num/inf.length*100;
        this.grade(mark, answNum);
    },
    grade: function(mark, answNum) {
        console.log(answNum);
        if (answNum == undefined) {
            var win = $('<div class="bgrnd"><div class="win"><p class="win_p_error">Сначала ответьте на вопросы<p>');
            $('body').append(win);
        } else {
            var win = $('<div class="bgrnd"><div class="win"><p class="win_p">Вы правы на '+mark+'%<p>');
            $('body').append(win);
        };
        $('.bgrnd').click(function() {
            this.remove();
            $('.wrapper_test').remove();
            start();
        })
    },
};
