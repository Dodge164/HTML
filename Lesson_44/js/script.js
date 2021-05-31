"use strict"
//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/

// Задача №1.
// Какое число (длинну) мы получим?
let arr = ['Ваня', 'Иштван', 'Оля',];
let newArr = arr;
newArr.push('Петя');
//console.log(arr.length);

// Ответ 4, тк push добавляет элемент в конец массива

// Задача №2.
/*
Создайте массив users с элементами "Ваня" и "Иштван".
Добавьте "Оля" в конец.
Замените значение в "Иштван" на "Петя".
Ваш код для поиска значения должен
работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте "Маша" и "Паша" в начало массива.
*/

let users =  ['Ваня', 'Иштван',];
users.push('Оля',); // Добавили Олю в конец
//console.log(users);

users.splice(1, 1, 'Петя'); // Заменяем второй элемент массива (который на самом деле первый) на Петю
//console.log(users);

const itemOne = users.shift(); // Удаляем первый элемент массива (который на самом деле нулевой)
// console.log("item: ", itemOne);
// console.log(users);

users.unshift('Маша', 'Паша'); //Вставили два элемента в начало массива
//console.log(users);





// Задача №3.
// Удалить элемент 'Иштван' и возвратить его в переменную
//let arr = ['Ваня', 'Иштван', 'Оля',];
// Решение
let arrThree = ['Ваня', 'Иштван', 'Оля',];
let removed = arrThree.splice(1, 1);
//console.log(removed);



// Задача №4.
//Сделать из строки массив
// let str = 'Ваня,Иштван,Оля';

// Решение
let str = 'Ваня,Иштван,Оля';
let arrFour = str.split(',');
//console.log(arrFour);


// Задача №5.
// Чему равен previousValue в начале работы метода?
let arrFive = [9, 2, 8,];
let reduceValue = arrFive.reduce(function (previousValue, item, index, array) {
	console.log(previousValue);
	} );
	console.log(reduceValue);

// Равно первому элементу массива - 9

