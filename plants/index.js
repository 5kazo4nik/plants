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

const itemPrice = [...document.getElementsByClassName('item-price')];
const dropBtnPrice = [...document.querySelectorAll('[data-btn=price]')];

dropBtnPrice.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    btn.classList.toggle('drop-btn-active');
    btn.querySelector('.arrow-drop-btn').classList.toggle('arrow-drop-btn-active');
    e.target.closest('.header-item-price').classList.toggle('header-item-price-active');
    const currentItemPrice = e.target.closest('.item-price');
    currentItemPrice.classList.toggle('item-price-active');
    currentItemPrice.querySelector('.content-item-price').classList.toggle('content-item-price-active');

    const activeBtn = [...document.getElementsByClassName('drop-btn-active')];
    if (activeBtn.length > 1) {
      activeBtn.forEach((item) => {
        if (item !== btn) {
          item.classList.remove('drop-btn-active');
          item.querySelector('.arrow-drop-btn').classList.remove('arrow-drop-btn-active');
          item.closest('.header-item-price').classList.remove('header-item-price-active');
          const prevItemPrice = item.closest('.item-price');
          prevItemPrice.classList.remove('item-price-active');
          prevItemPrice.querySelector('.content-item-price').classList.remove('content-item-price-active');
        }
      });
    }
  });
});

// dropBtnPrice.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     btn.classList.toggle('drop-btn-active');
//     btn.querySelector('.arrow-drop-btn').classList.toggle('arrow-drop-btn-active');
//     e.target.closest('.header-item-price').classList.toggle('header-item-price-active');
//     const currentItemPrice = e.target.closest('.item-price');
//     currentItemPrice.classList.toggle('item-price-active');
//     currentItemPrice.querySelector('.content-item-price').classList.toggle('content-item-price-active');

//     const activeItems = document.getElementsByClassName('item-price-active');
//     if (activeItems.length > 1) {
//       itemPrice.forEach((item) => {
//         item.querySelector('.drop-btn').classList.remove('drop-btn-active');
//         item.querySelector('.arrow-drop-btn').classList.remove('arrow-drop-btn-active');
//         item.querySelector('.header-item-price').classList.remove('header-item-price-active');
//         item.classList.remove('item-price-active');
//         item.querySelector('.content-item-price').classList.remove('content-item-price-active');
//       });
//     }
//   });
// });
