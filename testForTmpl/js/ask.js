'use strict';
function getModalAdd() {
  var modalAddQuest = $('<div class="modalBgrnd"><div class="modalWin"><p class="modalHeader">Добавьте вопрос, варианты ответа и не забудьте отметить правильный</p><input type="text" name="" value placeholder ="Запишите свой вопрос" class="inputQuestion"><label><input class="answerRadio" type="radio" name="ans" value=""><input type="text" name="answer" value placeholder ="Запишите сюда правильный ответ" class="answerText" trueness="false"></input></label><label><input class="answerRadio" type="radio" name="ans" value=""><input type="text" name="answer" value placeholder ="Запишите сюда неправильный ответ" class="answerText" trueness="false"></input></label><label><input class="answerRadio" type="radio" name="ans" value=""><input type="text" name="answer" value placeholder ="Запишите сюда еще один неправильный ответ" class="answerText" trueness="false"></input></label><button class="cancel btn btn-outline-danger" type="button" name="button">Закрыть</button><button class="insert btn btn-outline-success" type="button" name="button">Добавить вопрос</button></div></div>');
  $('body').append(modalAddQuest);
  $('.cancel').click(function(){
    $('.modalBgrnd').remove();
  });
  $('.insert').click(createNewClass);
};

function createNewClass(){
  var qu = $('.inputQuestion').val();

    var getInput = $('input[name = answer]');
    var getTrue = $('input[name = ans]:checked').length;
    console.log(getInput);

    var answ1 = getInput[0].value;
    var answ2 = getInput[1].value;
    var answ3 = getInput[2].value;

    var tr = $('input[name = ans]');
    console.log(tr);
    var newRadio = new Radio;
    for (var i = 0; i < tr.length; i++) {
      if (tr[i].checked == true) {
        newRadio[i] = true;
      } else {
        newRadio[i] = false;
      };
    };
    console.log(newRadio);

  if (qu != undefined && answ1 != undefined && answ2 != undefined && answ3 != undefined && getTrue === 1) {
    var newClass = new Class(qu, answ1, answ2, answ3, newRadio);
    console.log(newClass);
    info.push(newClass);
    var saved = JSON.stringify(info);
    localStorage.setItem('bibleAsk', saved);
    getInput[0].value = "";
    getInput[1].value = "";
    getInput[2].value = "";
    start();
  } else if (getTrue === 0) {
    alert ('Отметьте правильный ответ')
  } else {
    alert('Вы должны заполнить все поля');
  };
};

function Radio() {
};

function Class(qu, answ1, answ2, answ3, newRadio){
  this.qu = qu,
  this.answ0 = answ1;
  this.answ1 = answ2;
  this.answ2 = answ3;
  this.trueness = newRadio;
};

    var info = [
        {
            qu: 'Кто вывел израильтян из Египта',
            answ0: 'Моисей',
            answ1: 'Авраам',
            answ2: 'Фараон',
            trueness: {
              0: true,
              1: false,
              2: false
            }
        },
        {
            qu: 'Какая последняя книга Библии',
            answ0: 'Откровение',
            answ1: 'Бытие',
            answ2: 'Псалом',
            trueness: {
              0: true,
              1: false,
              2: false
            }
        },
        {
            qu: 'Как звали первого человека',
            answ0: 'Адам',
            answ1: 'Навуходоносор',
            answ2: 'Пилат',
            trueness: {
              0: true,
              1: false,
              2: false
            }
        },
        {
            qu: 'Кто был первым царем Израиля',
            answ0: 'Саул',
            answ1: 'Давид',
            answ2: 'Соломон',
            trueness: {
              0: true,
              1: false,
              2: false
            }
        }
    ];




    // var info = [
    //     question1: {
    //         qu: 'Кто вывел израильтян из Египта',
    //         answT: 'Моисей',
    //         answF1: 'Авраам',
    //         answF2: 'Фараон',
    //         className: 'answer1'
    //     },
    //     question2: {
    //         qu: 'Какая последняя книга Библии',
    //         answT: 'Откровение',
    //         answF1: 'Бытие',
    //         answF2: 'Псалом',
    //         className: 'answer2'
    //     },
    //     question3: {
    //         qu: 'Как звали первого человека',
    //         answT: 'Адам',
    //         answF1: 'Навуходоносор',
    //         answF2: 'Пилат',
    //         className: 'answer3'
    //     },
    //     question4: {
    //         qu: 'Кто был первым царем Израиля',
    //         answT: 'Саул',
    //         answF1: 'Давид',
    //         answF2: 'Соломон',
    //         className: 'answer4'
    //     }
    // ];
    //
    //
    //
    // var saved = JSON.stringify(info);
    // localStorage.setItem('bibleAsk', saved);
