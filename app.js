//hamburger menu

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navbar__menu');
const x = document.querySelector('.fa-times');
const burger = document.querySelector('.fa-bars');
const quote = document.querySelector('.quote');

const menuFunc = () => {
  nav.classList.toggle('active-menu');
  burger.classList.toggle('hide');
  x.classList.toggle('hide');
  if (burger.classList.contains('hide')) {
    burger.style = 'display: none';
    x.style = 'display: block';
    quote.style = 'display: none';
  }
  if (x.classList.contains('hide')) {
    x.style = 'display: none';
    burger.style = 'display: block';
    quote.style = 'display: block';
  }
};

hamburger.addEventListener('click', menuFunc);
