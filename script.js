 'use strict';

// Задача про дни недели

let lang = prompt('Задайте lang');

console.log('Через if:');
let weekRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Cуббота', 'Воскресенье'];
let weekEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
if (lang==='ru') console.log(weekRu);
if (lang==='en') console.log(weekEn);

console.log('Через switch:');
switch (lang){
  case 'ru': 
    console.log(weekRu);
    break;
  case 'en': 
    console.log(weekEn);
    break;
}

console.log('Через массив:');
var week = { 
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Cуббота', 'Воскресенье' ], 
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
}
console.log(week[lang]);

// Задача с тернарными операторами

let namePerson = prompt('Задайте namePerson');
let profession = namePerson==='Артем' ? "Директор" : namePerson==='Максим' ? "Преподаватель" : "Студент";
console.log(profession); 


