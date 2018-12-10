console.log('script.js is connected');
// var dat;
$(function(){
        var inr = $('#printTest').html();

        var dat = [
            {
                qu1: 'ffffffff',
                va1_1: 'ffffffff',
                va1_2: 'ffffffff',
                va1_3: 'ffffffff'
            },
            {
                qu2: 'ffffffff',
                va2_1: 'ffffffff',
                va2_2: 'ffffffff',
                va2_3: 'ffffffff'
            },
            {
                qu3: 'ffffffff',
                va3_1: 'ffffffff',
                va3_2: 'ffffffff',
                va3_3: 'ffffffff'
            }
        ];

        var con = tmpl(inr, dat);

        $('body').append(con);

        return dat;
    });
