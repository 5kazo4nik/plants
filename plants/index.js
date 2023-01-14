console.log(
  '1. Вёрстка соответствует макету. Ширина экрана 768px: +24;\n2. Вёрстка соответствует макету. Ширина экрана 380px: +24;\n3. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +15;\n4. На ширине экрана 380рх и меньше реализовано адаптивное меню: +22\nИтого: 75\n\n1. При нажатии на кнопки:Gargens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50;\n2. Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50;\n3. В разделе contacts реализован select с выбором городов +25;\nИтого: 100'
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
const headsPrice = [...document.querySelectorAll('.header-item-price')];

headsPrice.forEach((head) => {
  head.addEventListener('click', (e) => {
    head.classList.toggle('header-item-price-active');
    head.querySelector('.arrow-drop-btn').classList.toggle('arrow-drop-btn-active');
    head.querySelector('.drop-btn').classList.toggle('drop-btn-active');
    const currentItemPrice = e.target.closest('.item-price');
    currentItemPrice.classList.toggle('item-price-active');
    currentItemPrice.querySelector('.content-item-price').classList.toggle('content-item-price-active');

    const activeHeadsPrice = [...document.getElementsByClassName('header-item-price-active')];
    if (activeHeadsPrice.length > 1) {
      activeHeadsPrice.forEach((activeHead) => {
        if (activeHead !== head) {
          activeHead.classList.remove('header-item-price-active');
          activeHead.querySelector('.arrow-drop-btn').classList.remove('arrow-drop-btn-active');
          activeHead.querySelector('.drop-btn').classList.remove('drop-btn-active');
          const prevItemPrice = activeHead.closest('.item-price');
          prevItemPrice.classList.remove('item-price-active');
          prevItemPrice.querySelector('.content-item-price').classList.remove('content-item-price-active');
        }
      });
    }
  });
});

const headerSelect = document.querySelector('.header-select');
const cities = [...document.querySelectorAll('.city-contacts')];

headerSelect.addEventListener('click', () => {
  headerSelect.classList.toggle('header-select-active');
  if (headerSelect.querySelector('p').textContent !== 'City') {
    headerSelect.classList.add('header-select-active');
  }
  headerSelect.querySelector('p').textContent = 'City';

  document.querySelector('.content-select-items').classList.toggle('content-select-items-active');
  headerSelect.querySelector('.drop-btn').classList.toggle('drop-btn-active');
  headerSelect.querySelector('.arrow-drop-btn').classList.toggle('arrow-drop-btn-active');
  [...document.querySelectorAll('.select-item')].forEach((item) => item.classList.toggle('select-item-active'));

  cities.forEach((city) => city.classList.remove('city-contacts-active'));

  if (headerSelect.classList.contains('header-select-active')) {
    document.querySelector('.contact-woman').classList.add('contact-woman-active');
    document.querySelector('.list-contacts-container').classList.add('list-contacts-container-active');
    document.querySelector('[data-offset="false"]').dataset.offset = 'true';
  } else {
    document.querySelector('[data-offset="true"]').dataset.offset = 'false';
    document.querySelector('.contact-woman').classList.remove('contact-woman-active');
    document.querySelector('.list-contacts-container').classList.remove('list-contacts-container-active');
  }
});

[...document.querySelectorAll('.select-item')].forEach((item) => {
  item.addEventListener('click', () => {
    const name = item.querySelector('p').textContent;
    headerSelect.querySelector('p').textContent = name;

    document.querySelector('.content-select-items').classList.remove('content-select-items-active');
    headerSelect.querySelector('.drop-btn').classList.remove('drop-btn-active');
    headerSelect.querySelector('.arrow-drop-btn').classList.remove('arrow-drop-btn-active');
    [...document.querySelectorAll('.select-item')].forEach((item) => item.classList.remove('select-item-active'));

    cities.forEach((city) => {
      const address = city.querySelectorAll('p')[3].textContent;
      if (address !== name) {
        city.classList.remove('city-contacts-active');
      } else {
        city.classList.add('city-contacts-active');
      }
    });
  });
});
