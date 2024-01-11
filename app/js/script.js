const btnHumburger = document.querySelector('#btnHumburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
btnHumburger.addEventListener('click', function(){
  console.log('open Humburger');

  if(header.classList.contains('open')){
    header.classList.remove('open');
    fadeElems.forEach(function(element){
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
    body.classList.remove('noscroll');
    
  }
  else{
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElems.forEach(function(element){
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
    
  }
});