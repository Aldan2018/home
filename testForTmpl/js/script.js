'use strict';

function start() {
  $("div.wrapper_test").remove();
$(function() {
    console.log('getTmpl ok');
    var inr = $('#testTmpl').html();
    var inf = JSON.parse(localStorage.getItem('bibleAsk'));
    // var inf = info;
    console.log(inf);
    var con = tmpl(inr, {data: inf});
    $('.wrapper').append(con);
    $('#check').click(function () {
        getResult.getCheck(inf);
    });
    $('#addQuestion').click(function () {
      getModalAdd()
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
            var name = 'name = answer'+(i);
            var answAttr = $('input['+name+']:checked').attr('num');
            if (inf[i].trueness[answAttr] === true) {
                num++;
            }
        };
        var mark = num/inf.length*100;
        this.grade(mark, answAttr);
    },
    grade: function(mark, answAttr) {
        if (answAttr == undefined) {
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
