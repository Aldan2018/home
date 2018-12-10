console.log('questionTest.js is connected');
// var testQuest = [
//     question = [
//         {qu1: 'Кто вывел израильтян из Египта?'},
//         {qu2: 'Кто был любимым учеником Иисуса?'},
//         {qu3: 'Кто построил ковчег?'}
//     ],
//
//     answQu1 = [
//         {qu1False1: 'Адам'},
//         {qu1False2: 'Навуходоносор'},
//         {qu1True: 'Моисей'}
//     ],
//     answQu2 = [
//         {qu2False1: 'Иуда'},
//         {qu2False2: 'Фома'},
//         {qu2True: 'Иоанн'}
//     ],
//     answQu3 = [
//         {qu3False1: 'Фараон'},
//         {qu3False2: 'апостол Петр'},
//         {qu3True: 'Ной'}
//     ]
// ];

var testQuest = {
    question1: {
        qu: 'Кто вывел израильтян из Египта?',
        False1: 'Адам',
        False2: 'Навуходоносор',
        True: 'Моисей'
    },

    question2: {
        qu: 'Кто был любимым учеником Иисуса?',
        False1: 'Иуда',
        False2: 'Фома',
        True: 'Иоанн'
        },

    question3: {
        qu: 'Кто построил ковчег?',
        False1: 'Фараон',
        False2: 'апостол Петр',
        True: 'Ной'
    }
};

var JSONqu = JSON.stringify(testQuest);

var storage;
localStorage.setItem(storage, JSONqu);
