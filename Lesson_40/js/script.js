"use strict"
//ДОМАШКА

// 1. Изучить теорию
// 2. Решить задачи:


// Задача №1
// Кто попадет в консоль первым Вася или Коля?
// function showName() {
// 	console.log('Вася!');
// }
// setTimeout(showName, 0);
// console.log('Коля!');
// Коля попадет в консоль первым, тк у него нулевая задержка в setTimeOut

// Задача №2
// Верно ли вызвана функция
// showMessage();
// function showMessage() {
// 	console.log('Сообщение');
// }
// Функция вызвана неверно. Ее следует вызывать после

// Задача №3
// Верно ли вызвана функция
// showMessage();
// let showMessage = function () {
// 	console.log('Сообщение');
// }
//Функция вызвана неверно. Ее следует вызывать после
// Задача №4
// Как решить проблему?
// 'use strict'

// if (2 > 1) {
//   function showMessage() {
//     console.log('Сообщение');
//   }
// }
// showMessage(); // Error (showMessage is not defined)


'use strict'

	function showMessage() {
		if (2 > 1)
		console.log('Сообщение');
	}

showMessage();


