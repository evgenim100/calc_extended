 'use strict';


const lesson04 = function(oneArg){
if (!typeof oneArg==='string') {
  console.log('Это не строка');
}
oneArg = oneArg.trim();
if (oneArg.length>30){
  oneArg = oneArg.substr(0, 30) + '...';
}
console.log('oneArg:', oneArg);
}

lesson04(prompt('Введите oneArg'));

