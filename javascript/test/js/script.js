
// DOM.start()

var DOM = {

    makeDOM: function makeDOM() {
        var body = document.querySelector('body');
            var wrapper = document.createElement('div');
                wrapper.classList.add('wrapper');
                    body.appendChild(wrapper);

                var title_p = document.createElement('p');
                    title_p.classList.add('wrapper__p');
                    title_p.innerHTML = 'Тест по программированию';
                        wrapper.appendChild(title_p);

                var ul = document.createElement('ul');
                    wrapper.appendChild(ul);

                this.makeLi(ul, wrapper, 3); // Передаем в функцию makeLi значение переменной qt_li, которое содержит количество вопросов теста
    },

    makeLi: function makeLi(ul, wrapper, qt_li) {

        for (var i = 1; i <= qt_li; i++) {
            var li = document.createElement('li');
                var p_li = (i+'. Вопрос № '+i);
                    li.innerHTML = p_li;
                var form = document.createElement('form');
                    form.classList.add('wrapper__form');
                li.appendChild(form);
            this.makeItem(form, 3); // Передаем в функцию makeLi значение переменной qt_input, которое содержит количество пунктов в вопросах
            ul.appendChild(li);
        }
        this.makeButton(wrapper);
    },

    makeItem: function makeItem(form, qt_input) {

        for (var i = 1; i <= qt_input; i++) {
            var label = document.createElement('label');
            var text = document.createTextNode(' Вариант ответа № ' + i);
            var br = document.createElement('br');

            var input = document.createElement('input');
                input.setAttribute('type', 'radio');
                input.setAttribute('name', 'item1');
                input.setAttribute('value', 'variant' + i);

                label.appendChild(input);
                label.appendChild(text);

                form.appendChild(label);
                form.insertBefore(br, form[i]);
        }
    },

    makeButton: function makeButton(wrapper) {
        console.log('ok');
        var form = document.createElement('form');
            wrapper.appendChild(form);
        var button = document.createElement('button');
            button.classList.add('btn-outline-primary', 'btn', 'wrapper__button');
            button.innerHTML = 'Проверить мои результаты';
        form.appendChild(button);

    }

}

DOM.makeDOM();

// start: function makeDOM() {
//     var body = document.querySelector('body');
//         var wrapper = document.createElement('div');
//             wrapper.classList.add('wrapper');
//                 body.appendChild(wrapper);
//
//             var title_p = document.createElement('p');
//                 title_p.classList.add('wrapper__p');
//                 title_p.innerHTML = 'Тест по программированию';
//                     wrapper.appendChild(title_p);
//
//             var ul = document.createElement('ul');
//                 wrapper.appendChild(ul);
//
//             makeLi(ul, 3, wrapper);
// }
//
// function makeLi(ul, qt_li, wrapper) {
//
//     for (var i = 1; i <= qt_li; i++) {
//         var li = document.createElement('li');
//             var p_li = (i+'. Вопрос № '+i);
//                 li.innerHTML = p_li;
//             var form = document.createElement('form');
//                 form.classList.add('wrapper__form');
//             li.appendChild(form);
//         makeItem(form, 3)
//         ul.appendChild(li);
//     }
//     makeButton(wrapper);
// }
//
// makeItem: function makeItem(form, qt_input) {
//
//     for (var i = 1; i <= qt_input; i++) {
//         var label = document.createElement('label');
//         var text = document.createTextNode(' Вариант ответа № ' + i);
//         var br = document.createElement('br');
//
//         var input = document.createElement('input');
//             input.setAttribute('type', 'radio');
//             input.setAttribute('name', 'item1');
//             input.setAttribute('value', 'variant' + i);
//
//             label.appendChild(input);
//             label.appendChild(text);
//
//             form.appendChild(label);
//             form.insertBefore(br, form[i]);
//     }
// }
//
// makeButton: function makeButton(wrapper) {
//     console.log('ok');
//     var form = document.createElement('form');
//         wrapper.appendChild(form);
//     var button = document.createElement('button');
//         button.classList.add('btn-outline-primary', 'btn', 'wrapper__button');
//         button.innerHTML = 'Проверить мои результаты';
//     form.appendChild(button);
//
// }
// }
