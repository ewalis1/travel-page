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

//Gallery - lightbox

const images = document.querySelectorAll('.gallery__img');
const lightbox = document.createElement('div');

lightbox.classList.add('lightbox');
document.body.appendChild(lightbox);

images.forEach((image) =>
  image.addEventListener('click', () => {
    lightbox.classList.add('lightbox-active');
    const img = document.createElement('img');
    img.src = image.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
  })
);

lightbox.addEventListener('click', (e) => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove('lightbox-active');
});
