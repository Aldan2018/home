$(function() {
    var inr = $('#tmplid').html();
    console.log(inr);
    var data = {
         userName: 'как вас зовут?',
         myProfession: 'ваша профессия?',
         firstHobby: 'ваше первое хобби?',
         secondHobby: 'ваше второе хобби?',
         thirdHobby: 'ваше третье хобби?',
         myTelefon: 'ваш номер телефона?',
         mySite: 'введите адрес вашего сайта',
         myDesire: 'чего вы хотите?'
    };
console.log(data);
    var con = tmpl(inr, data);

    $('body').append(con);
});
