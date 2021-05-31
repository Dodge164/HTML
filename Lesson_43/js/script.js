"use strict"

//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/

// Задача №1. Верна ли запись?
// let fls = "фрилансер";
// let text = 'Привет! Я ${fls}';
// // Ожидаем получить Привет! Я фрилансер
// console.log(text);

// Решение
let fls = "фрилансер";
let text = `Привет! Я ${fls}`;
// Ожидаем получить Привет! Я фрилансер
console.log(text);



// Задача №2. Получить символ "н" строки:
// let text = 'фрилансер';

// Решение
let textt = 'фрилансер';
console.log(textt[5]);

// Задача №3. Верно?
let texttt = 123 + "456";
// Ожидаем 579   НЕТ, ВЕРНЕТСЯ СТРОКА 123456
console.log(texttt);

// Задача №4. Получить строку в верхнем регистре
let textttt = 'фрилансер';
// Решение
console.log(textttt.toLocaleUpperCase());


// Задача №5. Получить подстроку "лан" из:
let texttttt = 'фрилансер';
// Решение
console.log(texttttt.slice(3, 6));

/*
// Задача №6. true или false ?
let text = 'фрилансер';
console.log(text.includes('лан', 4));
False
*/
