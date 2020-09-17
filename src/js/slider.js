const carouselSlide = document.querySelector('.slide');
const carouselItems = document.querySelectorAll('.slide .slider-item');

// Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter
let counter = 1;
const size = carouselItems[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';

// Button listeners

nextBtn.addEventListener('click', () => {
  if (counter >= carouselItems.length - 1) return;
  carouselSlide.style.transition = 'transform 500ms ease-in-out';
  counter++;
  console.log(counter);
  carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
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
