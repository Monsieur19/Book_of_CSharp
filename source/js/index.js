const btnBurger = document.querySelector('.header__top-burger');
const headNav = document.querySelector('.nav--mobile');
const btnCloseNav = document.querySelector('.nav__btn-close');
const btnEventShowAll = document.querySelector('.event__btn-show-all');
const listEvent = document.querySelector('.event__list');
const listHeaderMiddle = document.querySelector('.header__middle-list');
const allExtraMenuBtn = document.querySelectorAll('.header__middle-item-link');
const allExtraMenu = document.querySelectorAll('.header__middle-extra-menu');
const allCatalogItem = document.querySelectorAll('.catalog__item');

function dltClassActive (arr) {
  for (let i = 0; i < arr.length; i++) {
      arr[i].classList.remove('active');
  }
}

btnEventShowAll.addEventListener('click', () => {
    listEvent.classList.add("active");
    btnEventShowAll.classList.add('visually-hidden');
})

btnBurger.addEventListener('click', () => {
  headNav.classList.toggle('active');
  btnBurger.classList.toggle('active');
})

btnCloseNav.addEventListener('click', () => {
  headNav.classList.toggle('active');
  btnBurger.classList.toggle('active');
})

listHeaderMiddle.addEventListener('click', (ev) => {
  if (ev.target.tagName === 'BUTTON') {
    if (ev.target.classList.contains('active')) {
      ev.target.nextSibling.classList.toggle('active');
      ev.target.classList.toggle('active');
    } else {
      dltClassActive(allExtraMenu);
      dltClassActive(allExtraMenuBtn);
      ev.target.classList.toggle('active');
      ev.target.nextSibling.classList.toggle('active');
    }
  }
})

// btn search
const btnSearch = document.querySelector('.header__top-btn-search');
const btnCloseSearch = document.querySelector('.header__top-btn-close-form');
const headerTopWrapper = document.querySelector('.header__top-wrapper');

btnSearch.addEventListener('click', (ev) => {
  ev.preventDefault();
  headerTopWrapper.classList.toggle('active');
})

btnCloseSearch.addEventListener('click', (ev) => {
  ev.preventDefault();
  headerTopWrapper.classList.remove('active');
})

//---------------------------

allExtraMenu.forEach(el => {
  new SimpleBar(el, {
    scrollbarMaxSize: 28,
    autoHide: false,
  });
})

document.querySelector('.catalog__countries').addEventListener('click', (ev) => {
  if (ev.target.tagName === 'LABEL') {
    dltClassActive(allCatalogItem);
    document.querySelector('.catalog__item--' + ev.target.firstChild.value).classList.add('active');
  }
})

document.querySelector('.catalog__list').addEventListener('click', (ev) => {
  let artist;
  let allArtists;
  if (ev.target.tagName === 'BUTTON') {
    if (window.innerWidth <= 576) {
      ev.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.catalog__list-artists').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    artist = ev.target.textContent;
    allArtists = ev.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll('.catalog__item-artist');
    ev.target.parentNode.parentNode.parentNode.parentNode.querySelector('.catalog__accordion-item.active').classList.remove('active');
    ev.target.parentNode.classList.add('active');

    for (let i = 0; i < allArtists.length; i++) {
      if (allArtists[i].querySelector('.catalog__author').textContent === artist) {
        dltClassActive(allArtists);
        allArtists[i].classList.add('active');
        break;
      }
    }
  }
})

// Edition
const categoryLegendEdition = document.querySelector('.edition__category legend');
const listEdition = document.querySelector('.edition__list');

function findLI(el) {
  if (el.classList.contains('edition__item')) {
    el.classList.toggle('active');
  } else {
    findLI(el.parentNode);
  }
}

categoryLegendEdition.addEventListener('click', (ev) => {
  ev.target.classList.toggle('active');
})

listEdition.addEventListener('click', (ev) => {
  if (ev.target.tagName !== 'INPUT') {
    findLI(ev.target);
  }
})

// модальное окно
const modal = new GraphModal();

const gallery = document.querySelector('.gallery__right');

const galleryModal = {
  img: document.querySelector('.gallery__modal-img img'),
  title: document.querySelector('.gallery__modal-title'),
  name: document.querySelector('.gallery__modal-name'),
  date: document.querySelector('.gallery__modal-date'),
  text: document.querySelector('.gallery__modal-text'),
};

gallery.addEventListener('click', (ev) => {
  console.log(ev.target);
    const slide = {
      img: ev.target.parentNode.querySelector('img').getAttribute('src'),
      title: ev.target.querySelector('.gallery__more-title').textContent,
      name: ev.target.querySelector('.gallery__more-name').textContent,
      date: ev.target.querySelector('.gallery__more-date').textContent,
      text: ev.target.querySelector('.gallery__more-text').textContent,
    };

    galleryModal.img.setAttribute('src', slide.img);
    galleryModal.title.textContent = slide.title;
    galleryModal.name.textContent = slide.name;
    galleryModal.date.textContent = slide.date;
    galleryModal.text.textContent = slide.text;

    console.log(galleryModal);
    console.log(slide);
});

// form

const btnSent = document.querySelector('.contact__btn-order');

btnSent.addEventListener('click', (ev) => {
  ev.preventDefault();
  const name = document.querySelector('.contact__input-name').value;
  const tel = document.querySelector('.contact__input-tel').value;
  const msg = name + '\n Телефон: ' + tel;
  window.open('mailto:gerankin.a@mail.ru?subject=Заказ&body=' + msg);
})