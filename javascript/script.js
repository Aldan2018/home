console.log('js on');

// получение степени

// function getDegree() {
//     var num = prompt('insert any number');
//     var deg = prompt('insert degree');
//     var resultDegree = Math.pow(num, deg);
//     return resultDegree
// }
//
// alert(getDegree())

// имена

function auturiz() {
    var errorVar = false;
    var named = [];
    for (var i=0; i <= 4; i++) {
        var name = prompt('Type any name');
        named.push(name);
    }

    console.log(named);

    var user = prompt('Enter you name');
    for (i=0; i<named.length; i++) {
        if (user == named[i]) {
            alert('Welcome,' + user);
            errorVar = true;
            break;
        }
    }

    if (errorVar === false) {
        alert('error')
    }


}

auturiz()
