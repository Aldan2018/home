var doma = {

    numQuest: '',
    dataForTest: '',

    getTest: function () {
        var dft = localStorage.getItem(storage);
        this.dataForTest = JSON.parse(dft);
        this.numQuest = Object.keys(this.dataForTest).length;

        console.log('this.dataForTest=', this.dataForTest, 'this.numQuest=', this.numQuest);
        // this.makeDOM();
    }

//     makeDOM: function makeDOM() {
//
//         // var body = document.querySelector('body');
//
//         var tamplate = document.querySelector('script');
//             // tamplate.setAttribute('type', 'text/html');
//             // tamplate.setAttribute('id', 'printTest');
//             // body.appendChild(tamplate);
//
//             var wrapper = document.createElement('div');
//                 wrapper.classList.add('wrapper');
//                     tamplate.appendChild(wrapper);
//
//                 var title_p = document.createElement('p');
//                     title_p.classList.add('wrapper__p');
//                     title_p.innerHTML = 'Интересный тест';
//                         wrapper.appendChild(title_p);
//
//                 var ul = document.createElement('ul');
//                     wrapper.appendChild(ul);
//
//                 this.makeLi(ul, wrapper);
//     },
//
//     makeLi: function makeLi(ul, wrapper) {
//
//         for (var i = 1; i <= this.numQuest; i++) {
//             var li = document.createElement('li');
//                 var p_li = i+ ". <%=question"+i+"%>";
//                     li.innerHTML = p_li;
//                 var form = document.createElement('form');
//                     form.classList.add('wrapper__form');
//                 li.appendChild(form);
//             this.makeItem(form, i);
//             ul.appendChild(li);
//         }
//         this.makeButton(wrapper);
//     },
//
//     makeItem: function makeItem(form, i) {
//
//         for (var k=1; k <= 3; k++) {
//             if (k==1) {
//                 var text = '<%= variant' + i + '_' + k + ' %>';
//             } else if (k==2) {
//                 var text = '<%= variant' + i + '_' + k + ' %>';
//             } else {
//                 var text = '<%= variant' + i + '_' + k + ' %>';
//             };
//             var label = document.createElement('label');
//             var br = document.createElement('br');
//
//             var input = document.createElement('input');
//                 input.setAttribute('type', 'radio');
//                 input.setAttribute('name', 'item1');
//                 input.setAttribute('value', 'variant' + i);
//
//                 label.appendChild(input);
//                 label.innerHTML = text;
//
//                 form.appendChild(label);
//                 form.insertBefore(br, form[k]);
//         };
//     },
//
//     makeButton: function makeButton(wrapper) {
//         var form = document.createElement('form');
//             wrapper.appendChild(form);
//         var button = document.createElement('button');
//             button.classList.add('btn-outline-primary', 'btn', 'wrapper__button');
//             button.innerHTML = 'Проверить мои результаты';
//         form.appendChild(button);
//
//     }
}
//
doma.getTest();
var numLi = doma.numQuest;

// DOM.start()

// var DOM = {
//
//     makeDOM: function makeDOM() {
//         var body = document.querySelector('body');
//
//         var tamplate = document.createElement('script');
//             tamplate.setAttribute('id', 'printTest');
//             tamplate.setAttribute('type', 'text/html');
//             body.appendChild(tamplate);
//
//             var wrapper = document.createElement('div');
//                 wrapper.classList.add('wrapper');
//                     tamplate.appendChild(wrapper);
//
//                 var title_p = document.createElement('p');
//                     title_p.classList.add('wrapper__p');
//                     title_p.innerHTML = 'Тест по программированию';
//                         wrapper.appendChild(title_p);
//
//                 var ul = document.createElement('ul');
//                     wrapper.appendChild(ul);
//
//                 this.makeLi(ul, wrapper, 3); // Передаем в функцию makeLi значение переменной qt_li, которое содержит количество вопросов теста
//     },
//
//     makeLi: function makeLi(ul, wrapper, qt_li) {
//
//         for (var i = 1; i <= qt_li; i++) {
//             var li = document.createElement('li');
//                 var p_li = (i+'. Вопрос № '+i);
//                     li.innerHTML = p_li;
//                 var form = document.createElement('form');
//                     form.classList.add('wrapper__form');
//                 li.appendChild(form);
//             this.makeItem(form, 3); // Передаем в функцию makeLi значение переменной qt_input, которое содержит количество пунктов в вопросах
//             ul.appendChild(li);
//         }
//         this.makeButton(wrapper);
//     },
//
//     makeItem: function makeItem(form, qt_input) {
//
//         for (var i = 1; i <= qt_input; i++) {
//             var label = document.createElement('label');
//             var text = document.createTextNode(' Вариант ответа № ' + i);
//             var br = document.createElement('br');
//
//             var input = document.createElement('input');
//                 input.setAttribute('type', 'radio');
//                 input.setAttribute('name', 'item1');
//                 input.setAttribute('value', 'variant' + i);
//
//                 label.appendChild(input);
//                 label.appendChild(text);
//
//                 form.appendChild(label);
//                 form.insertBefore(br, form[i]);
//         }
//     },
//
//     makeButton: function makeButton(wrapper) {
//         var form = document.createElement('form');
//             wrapper.appendChild(form);
//         var button = document.createElement('button');
//             button.classList.add('btn-outline-primary', 'btn', 'wrapper__button');
//             button.innerHTML = 'Проверить мои результаты';
//         form.appendChild(button);
//
//     }
//
// }
//
// DOM.makeDOM();
