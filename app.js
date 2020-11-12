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
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

//Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

function pow(x, n) {
    return (Math.pow(x, n));
}
pow(3, 2);

//Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

let x = prompt('x', '');
let n = prompt('y', '');

if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
    alert(pow(x, n));
}



// let num = 1;     
// num = num + 12; num +=12;
// num = num - 14; num -=14;
// num = num * 5; num *=5;
// num = num / 7; num /=7;
// num = num + 1; num ++;
// num = num - 1; num --1;
// alert(num);

const num = 3;
alert(num);

const a = 10;
const b = 2;
// alert(a + b);
// alert(a * b);
// alert(a / b);
alert(a - b);

const str1 = 'Hello ';
const str2 = 'World';
console.log = `${str1}` + `${str2}`;

const name = "Ann";
console.log = (`Привет, ${name}!`);

let age = 28;
console.log = (`Мне ${age} лет!`);


function ques() {
    prompt('What is your name?');
}
ques();
alert(`Your name is ${name}`);


let question = prompt('What is your name?');
alert(`Your name is ${name}`);
console.log(question);

// String str = 'abcde';
// System.out.printIn(str.charAt(0,2,4));


function getIndex() {
    let str = 'abcde';
    return (str.charAt(0));
}
getIndex();
//Создайте переменную num и присвойте ей значение '12345'. Найдите произведение (умножение) цифр этого числа.
let num1 = '12345';

let arr = ['Привет', 'мир', '!'];
arr[0] = 'Пока, ';
alert(arr);

let obj = {
    Петя: 1000,
    Коля: 500,
    Аня: 100
};
prompt(obj['Аня']);
//Выведите  слово 'голубой'.
let arr1 = {
	'ru':['голубой', 'красный', 'зеленый'],
	'en':['blue', 'red', 'green'],
};
alert(arr1['ru'][0]);


