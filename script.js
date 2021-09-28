'use strict';
let blueDiv;

function DomElement(selector, height, width, bg, fontSize){
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.addNewElem = function(text){
    if (this.selector[0] == '.'){
    let newDiv = document.createElement('div');
    newDiv.className = this.selector.slice(1);
    newDiv.innerHTML = text;
    newDiv.style.height = this.height;
    newDiv.style.width = this.width;
    newDiv.style.backgroundColor = this.bg;
    newDiv.style.fontSize = this.fontSize;
    newDiv.style.position = 'absolute';
    


    // newDiv.style.cssText = 'height:' + this.height + '; width' + this.width + '; background-color:' + this.bg + '; font-size:' + this.fontSize ;

    document.body.append(newDiv);
  }

    if (this.selector[0] == '#'){
    let newP = document.createElement('p');
    newP.id = this.selector.slice(1);
    newP.innerHTML = text;
    document.body.append(newP);
  }
 };
};

 let odjectEx = new DomElement('.div', '100px', '100px', 'blue', '36px');
 document.addEventListener("DOMContentLoaded", odjectEx.addNewElem('Я синий'));
 blueDiv = document.getElementsByClassName('div')[0];
 document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowUp') {
    blueDiv.style.top = String(Number(blueDiv.style.top.substring(0, blueDiv.style.top.length - 2)) - 10) + 'px';
  } else {
  if (event.code == 'ArrowDown') {
    blueDiv.style.top = String(Number(blueDiv.style.top.substring(0, blueDiv.style.top.length - 2)) + 10) + 'px';
  } else {
   if (event.code == 'ArrowLeft') {
    blueDiv.style.left = String(Number(blueDiv.style.left.substring(0, blueDiv.style.left.length - 2)) - 10) + 'px';
  } else {
   if (event.code == 'ArrowRight') {
    blueDiv.style.left = String(Number(blueDiv.style.left.substring(0, blueDiv.style.left.length - 2)) + 10) + 'px';
  };};};};
});




