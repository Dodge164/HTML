"use strict"

//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/
/*
// Задача №1 (верна ли запись)
const userInfo = {
	name: "Вася"
	age: 30
}
// Запись неверна, тк после значений не стоят запятые

// Задача №2 (что будет в консоли?)
let userInfo = {
	name: "Вася",
	age: 30,
	"58": 'Значение свойства'
}
console.log(userInfo[58]);
// В консоли отобразится значение параметра 58 - Значение свойства


// Задача №3 (что будет в консоли?)
let userInfo = {
	name: "Вася",
	age: 30,
}
let user = userInfo;
user.age = 45;

console.log(userInfo.age);
//В консоли отобразится переназначенное значение параметра age - 45
*/




// Задача №4 (что будет в консоли?)
// let userInfo = {
// 	name: "Вася",
// 	age: 30,
// 	showInfo() {
// 		console.log(`${this.name}`);
// 	}
// }
// let user = userInfo;
// userInfo = null;
// user.showInfo();
// Останется значение Вася, тк путь к значению дублирован, а не уничтожен


// Задача №5 (что будет в консоли?)
// let userInfo = {
// 	name: "Вася",
// 	age: 30,
// }
// for (const key in userInfo) {
// 	const value = userInfo[key];
// 	console.log(value);
// }
// Будет Вася 30, тк кей - обобщает все значения параметров.


// Задача №6 (что будет в консоли?)
// let userInfo = {
// 	name: "Вася",
// 	age: 30,
// 	address: {
// 		city: "Uzhhorod"
// 	}
// }
// for (const key in userInfo.address) {
// 	console.log(userInfo.address[key]);
// }
// Будет Ужгород, тк кей с указанием конкретного параметра через точку выводит значение только этого пконкретного параметра, а не всего объекта


// Задача №7 (верна ли запись)
// const userInfo = {
// 	name: "Вася",
// 	age: 30,
// 	"likes js": true
// }
// console.log(userInfo."likes js");
// Запись неверна, имя параметра объекта из двух и более слов выводят с помощью квадратных скобок без точки
// Задача №8
function UserInfo(name, age = 30) { // Создаем функцию-конструктор
	// const userInfo ={} Создаем пустой объект (неявно)
	this.name = name; //Добавьте свойство name со значением Вася.
	this.age = age; //Добавьте свойство age со значением 30.
	//return userInfo;   Неявно возвращаем объект
}
console.log(new UserInfo('Вася'));
console.log(new UserInfo('Лена'));

delete UserInfo.name;
/*
1.Создайте пустой объект userInfo.
2.Добавьте свойство name со значением Вася.
3.Добавьте свойство age со значением 30.
4.Измените значение свойства name на Лена.
5.Удалите свойство name из объекта.
*/