"use strict"

//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/

// Задача №1. Получить верное значение округления
// let numOne = Math.round(1.005 * 100) / 100;
// console.log(numOne); // Выведет 1 что не верно

// Решение
let sourseNum = 1.005 + Number.EPSILON;
let numOne = Math.round(sourseNum * 100) / 100;
console.log(numOne); // Выведет 1.01 что верно


// Задача №2. Получить число 135.58 из строки
// let value = "135.58px";

// Решение
let value = parseFloat("135.58px");
console.log(value);

// Задача №3. Посттроить верное условное ветвление
// let value = 58 + "Фрилансер";
// if (написать ответ) {
// 	console.log('Результат выражения NaN');
// }
// Решение
let valuee = 58 + "Фрилансер";
if (isNaN(valuee)) {
	console.log('Результат выражения NaN');
}

// Задача №4.
// Найти максимальное число из 10,58,39,-150,0
// Решение
console.log(Math.max(10,58,39,-150,0));

// Задача №5.
// Округлить число 58.858 до числа 58
// Решение
console.log(Math.floor(58.858));

