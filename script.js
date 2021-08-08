let num = 266219;
let multiplied = 1;

for (let i = 0; i < String(num).length; i++) multiplied = multiplied*String(num)[i];

console.log('Произведение цифр числа ' + num + ' равно ' + multiplied);
multiplied**=3;
console.log('Первые две цифры куба этого числа ' + String(multiplied).substring(0, 2));

