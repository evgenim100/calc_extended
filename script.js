 'use strict';



let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Cуббота'];
let date = new Date();

for (let i=0; i<7; i++){
  if ((week[i] === 'Cуббота') || (week[i] === 'Воскресенье')) week[i] = '<i>' + week[i] + '</i>';
    if (i == date.getDay()) week[i] = '<b>' + week[i] + '</b>';
    document.write(week[i] + '<br>');
    
  }
