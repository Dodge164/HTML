"use strict"

//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/

// Задача №1.
// Получить в переменную элемент с атрибутом data-say-hi
// и прочитать значение этого атрибута
//<div data-say-hi="yes">Привет!</div>

const lessonText = document.querySelector('.lesson__text');
console.log(lessonText.innerText);


// Задача №2.
// Получить в переменную элемент с текстом Йончи
{/* <ul>
	<li>Корчи</li>
	<li>Йончи</li>
</ul> */}
const lessonTextt = document.querySelectorAll('li');
console.log(lessonTextt);
///console.log(lessonTextt[1]);
for (const item of lessonTextt) {
	// console.log(item);
	if (item.innerText === 'Йончи')
	{
		console.log(item.innerText);
	}
}
// lessonTextt.forEach(item => {
// 	console.log(item);
// });
/*
// Задача №3.
// Получить в переменную коллекцию элементов с классом like
<div class="like"></div>
</div class="subscribe"></>
<div class="like subscribe"></div>
*/
const task3 = document.querySelectorAll('.like');
console.log('task3 :>> ', task3);
/*
// Задача №4.
// Куда добавится <li>Текст</li> ?

// JS
const list = document.querySelectorAll('ul');
list.insertAdjacentHTML(
	'beforeend',
	'<li>Текст</li>'
);

// HTML
<ul>
	<li>Пункт №1</li>
	<li>Пункт №2</li>
	<li>Текст</li>		// Вставится вот сюда
</ul>
*/







































