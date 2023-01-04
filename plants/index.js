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

const btnService = [...document.querySelectorAll('.btn-service')];
const itemService = [...document.getElementsByClassName('content-item-service')];

let sum = 0;

btnService.forEach((el) => {
  btnService[0].addEventListener('click', (e) => {
    if (sum < 2 && !btnService[0].classList.contains('btn-service-active')) {
      e.target.classList.add('btn-service-active');
      itemService[0].classList.add('content-item-service-active');
      itemService[4].classList.add('content-item-service-active');
      sum += 1;
    } else if (sum <= 2 && btnService[0].classList.contains('btn-service-active')) {
      e.target.classList.remove('btn-service-active');
      itemService[0].classList.remove('content-item-service-active');
      itemService[4].classList.remove('content-item-service-active');
      sum -= 1;
    }
  });

  btnService[1].onclick = (e) => {
    if (sum < 2 && !btnService[1].classList.contains('btn-service-active')) {
      e.target.classList.add('btn-service-active');
      itemService[2].classList.add('content-item-service-active');
      sum += 1;
    } else if (sum <= 2 && btnService[1].classList.contains('btn-service-active')) {
      e.target.classList.remove('btn-service-active');
      itemService[2].classList.remove('content-item-service-active');
      sum -= 1;
    }
  };

  btnService[2].addEventListener('click', (e) => {
    if (sum < 2 && !btnService[2].classList.contains('btn-service-active')) {
      e.target.classList.add('btn-service-active');
      itemService[1].classList.add('content-item-service-active');
      itemService[3].classList.add('content-item-service-active');
      itemService[5].classList.add('content-item-service-active');
      sum += 1;
    } else if (sum <= 2 && btnService[2].classList.contains('btn-service-active')) {
      e.target.classList.remove('btn-service-active');
      itemService[1].classList.remove('content-item-service-active');
      itemService[3].classList.remove('content-item-service-active');
      itemService[5].classList.remove('content-item-service-active');
      sum -= 1;
    }
  });

  el.addEventListener('click', () => {
    itemService.forEach((el) => el.classList.add('blur'));
    const activeBtn = document.querySelectorAll('.btn-service-active');
    if (!activeBtn.length || sum === 0) {
      itemService.forEach((el) => el.classList.remove('blur'));
    }
  });
});
