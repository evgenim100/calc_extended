 'use strict';

let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Cуббота'];
let month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
let date = new Date();


function addZero(number){
  number = String(number);
  if (number.length === 1){
    number = '0' + number;
  };
return number;
};

function setDeclation (hours, minutes, seconds) {
  let hDec;
  let mDec;
  let sDec;
  hours = String(hours);

  switch (hours[hours.length-1]){
    case '0' : 
      hDec = 'часов';
      break;
    case '1' : 
      hDec = 'час';
      break;
    case '2' : 
      hDec = 'часа';
      break;
    case '3' : 
      hDec = 'часа';
      break;
    case '4' : 
      hDec = 'часа';
      break;
    case '5' : 
      hDec = 'часов';
      break;
    case '6' : 
      hDec = 'часов';
      break;
    case '7' : 
      hDec = 'часов';
      break;
    case '8' : 
      hDec = 'часов';
      break;
    case '9' : 
      hDec = 'часов';
      break;
  };
  if ((Number(hours) >= 11) && (Number(hours) <= 14)){
    hDec = 'часов';
  };

minutes = String(minutes);

  switch (minutes[minutes.length-1]){
    case '0' : 
      mDec = 'минут';
      break;
    case '1' : 
      mDec = 'минута';
      break;
    case '2' : 
      mDec = 'минуты';
      break;
    case '3' : 
      mDec = 'минуты';
      break;
    case '4' : 
      mDec = 'минуты';
      break;
    case '5' : 
      mDec = 'минут';
      break;
    case '6' : 
      mDec = 'минут';
      break;
    case '7' : 
      mDec = 'минут';
      break;
    case '8' : 
      mDec = 'минут';
      break;
    case '9' : 
      mDec = 'минут';
      break;
  };
  if ((Number(minutes) >= 11) && (Number(minutes) <= 14)){
    mDec = 'минут';
  };

  seconds = String(seconds);

  switch (seconds[seconds.length-1]){
    case '0' : 
      sDec = 'секунд';
      break;
    case '1' : 
      sDec = 'секунда';
      break;
    case '2' : 
      sDec = 'секунды';
      break;
    case '3' : 
      sDec = 'секунды';
      break;
    case '4' : 
      sDec = 'секунды';
      break;
    case '5' : 
      sDec = 'секунд';
      break;
    case '6' : 
      sDec = 'секунд';
      break;
    case '7' : 
      sDec = 'секунд';
      break;
    case '8' : 
      sDec = 'секунд';
      break;
    case '9' : 
      sDec = 'секунд';
      break;
  };
  if ((Number(seconds) >= 11) && (Number(seconds) <= 14)){
    sDec = 'секунд';
  };
return hours + ' ' + hDec + ' ' + minutes + ' ' + mDec + ' ' + seconds + ' ' + sDec;
};

// function updateDateTime(){
// let firstSpan = document.getElementById('first');
// let secondSpan = document.getElementById('second');

// firstSpan.textContent = 'а) Сегодня ' + week[date.getDay()] + ', ' + date.getDate() + ' ' + month[date.getMonth()] + ' ' + date.getFullYear() + ' года, ' + setDeclation(date.getHours(), date.getMinutes(), date.getSeconds());
// console.log(firstSpan.textContent);
// secondSpan.textContent = 'б) ' + addZero(date.getDate()) + '.' + addZero(date.getMonth()) + '.' + date.getFullYear() + ' - ' + addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());
// console.log(secondSpan.textContent);
// };

document.write('<span id="first" style="font-size: 14pt; font-family: Roboto, sans-serif; color: rgb(255, 0, 0); background-color: transparent; font-weight: 700; font-variant-ligatures: normal; font-variant-east-asian: normal; font-variant-position: normal; vertical-align: baseline; white-space: pre-wrap; --darkreader-inline-color:#ec3636; --darkreader-inline-bgcolor:transparent;" data-darkreader-inline-color="" data-darkreader-inline-bgcolor="">' +'а) Сегодня ' + week[date.getDay()] + ', ' + date.getDate() + ' ' + month[date.getMonth()] + ' ' + date.getFullYear() + ' года, ' + setDeclation(date.getHours(), date.getMinutes(), date.getSeconds()) + '</span><br>');

document.write('<span id="second" style="font-size: 14pt; font-family: Roboto, sans-serif; color: rgb(255, 0, 0); background-color: transparent; font-weight: 700; font-variant-ligatures: normal; font-variant-east-asian: normal; font-variant-position: normal; vertical-align: baseline; white-space: pre-wrap; --darkreader-inline-color:#ec3636; --darkreader-inline-bgcolor:transparent;" data-darkreader-inline-color="" data-darkreader-inline-bgcolor="">' +'б) ' + addZero(date.getDate()) + '.' + addZero(date.getMonth()) + '.' + date.getFullYear() + ' - ' + addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds()) + '</span>');



setInterval(function(){
let firstSpan = document.getElementById('first');
let secondSpan = document.getElementById('second');
let date = new Date();
firstSpan.textContent = 'а) Сегодня ' + week[date.getDay()] + ', ' + date.getDate() + ' ' + month[date.getMonth()] + ' ' + date.getFullYear() + ' года, ' + setDeclation(date.getHours(), date.getMinutes(), date.getSeconds());
secondSpan.textContent = 'б) ' + addZero(date.getDate()) + '.' + addZero(date.getMonth()) + '.' + date.getFullYear() + ' - ' + addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());

}, 1000);

// function test(){
//   console.log('test');
// };

// setInterval(test(), 1000);
