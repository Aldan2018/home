
    var info = [
        {
            qu: 'Кто вывел израильтян из Египта',
            answT: 'Моисей',
            answF1: 'Авраам',
            answF2: 'Фараон',
            className: 'answer1'
        },
        {
            qu: 'Какая последняя книга Библии',
            answT: 'Откровение',
            answF1: 'Бытие',
            answF2: 'Псалом',
            className: 'answer2'
        },
        {
            qu: 'Как звали первого человека',
            answT: 'Адам',
            answF1: 'Навуходоносор',
            answF2: 'Пилат',
            className: 'answer3'
        },
        {
            qu: 'Кто был первым царем Израиля',
            answT: 'Саул',
            answF1: 'Давид',
            answF2: 'Соломон',
            className: 'answer4'
        }
    ];

    var saved = JSON.stringify(info);
    localStorage.setItem('bibleAsk', saved);
