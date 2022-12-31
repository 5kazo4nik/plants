console.log(
  '1. Вёрстка соответствует макету. Ширина экрана 768px: +24;\n2. Вёрстка соответствует макету. Ширина экрана 380px: +24;\n3. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +15;\n4. На ширине экрана 380рх и меньше реализовано адаптивное меню: +22\nИтого: 75'
);

const navList = document.querySelector('.nav-list');
const navListBg = document.querySelector('.nav-list-bg');
const burgerBtn = document.querySelector('.burger-btn');
const burgerLine1 = document.querySelector('.burger-line1');
const burgerLine2 = document.querySelector('.burger-line2');

burgerBtn.addEventListener('click', () => {
  burgerLine1.classList.toggle('burger-line1-active');
  burgerLine2.classList.toggle('burger-line2-active');
  navList.classList.toggle('nav-list-active');
  navListBg.classList.toggle('nav-list-bg-active');
  document.body.classList.toggle('body-lock');

  navListBg.addEventListener('click', () => {
    burgerLine1.classList.remove('burger-line1-active');
    burgerLine2.classList.remove('burger-line2-active');
    navList.classList.remove('nav-list-active');
    navListBg.classList.remove('nav-list-bg-active');
    document.body.classList.remove('body-lock');
  });

  [...document.getElementsByClassName('nav-item')].forEach((link) => {
    link.addEventListener('click', () => {
      burgerLine1.classList.remove('burger-line1-active');
      burgerLine2.classList.remove('burger-line2-active');
      navList.classList.remove('nav-list-active');
      navListBg.classList.remove('nav-list-bg-active');
      document.body.classList.remove('body-lock');
    });
  });
});
