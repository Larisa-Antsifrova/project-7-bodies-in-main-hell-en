const carouselSlide = document.querySelector('.slide');
const carouselItems = document.querySelectorAll('.slide div');

// Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter
let counter = 1;
const size = carouselItems[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';

// Button listeners

nextBtn.addEventListener('click', () => {
  carouselSlide.style.transition = 'transform 250ms ease-in-out';
  counter++;
  console.log(counter);
  carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
});

prevBtn.addEventListener('click', () => {
  carouselSlide.style.transition = 'transform 250ms ease-in-out';
  counter--;
  console.log(counter);
  carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
  if (carouselItems[counter].id === 'lastClone') {
    carouselSlide.style.transition = 'none';
    counter = carouselItems.length - 2;
    carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
  }
  if (carouselItems[counter].id === 'firstClone') {
    carouselSlide.style.transition = 'none';
    counter = carouselItems.length - counter;
    carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
  }
});
