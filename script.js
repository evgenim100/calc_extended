 'use strict';

// Задача про массив

 let arr = [];
 let symbol;

 for (let i=0; i<7; i++){
  arr[i] = prompt('Введите многозначное число');
 };

 for (let i=0; i < arr.length; i++){
   
   symbol = arr[i];
    if ((Number(symbol[0]) === 2) || (Number(symbol[0]) ) === 4) console.log(arr[i])
 };





// Задача про простые числа

let sum;

for (let i=2; i < 101; i++){
  sum = 0;
    for (let j = 1; j < i+1; j++){
      if (i/j == Math.trunc(i/j)) sum = sum+j;
      
  if (sum == i+1) console.log('Число ' + i + ' является простым. Делители данного числа 1 и', i); 
  
 };
};