'use strict';

// function checkAge(age) {
//     if (age>18) {
//         return true;
//     } else {
//         return confirm ('Родители разрешили?');
//     }
// }

// checkAge(19);

//переписать функцию при помощи оператора ?

function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}
checkAge(19);

//переписать функцию при помощи оператора ||
function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}
checkAge(19);


//задание возвратить наименьшее число
function (a, b) {
    if (a<b) {
        return a;
    } else {
        return b;
    }
}

//Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

function pow(x, n) {
    return(Math.pow(x, n));
}
pow(3, 2);

//Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
 
function pow(x, n) {
    prompt('x', '');
    prompt('y', '');
    return (Math.pow(x, n));
}
pow('', '');
