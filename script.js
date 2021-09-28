'use strict';

let randNumber,
 changeBtn = document.getElementById('change'),
 colorStr = document.getElementById('color'),
 divWrapper = document.querySelector('.wrapper');

divWrapper.style.cssText = 'display: flex; align-items: center; flex-direction: column; justify-content: center;';

function changeColor(){
  randNumber = (0xFFFFFFFF-Math.random()*0xFFFFFFFF).toString(16).substr(0, 6);
  document.body.style.backgroundColor = '#' + randNumber;
  changeBtn.style.color = '#' + randNumber;
  colorStr.textContent = '#' + randNumber;
};

changeColor();
changeBtn.addEventListener('click', changeColor);

