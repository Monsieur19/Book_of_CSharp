// Search

const allEl = document.querySelectorAll('p,div');
const inputSearch = document.querySelector('.course__search-input');
const btnSearch = document.querySelector('.course__search-btn');

btnSearch.addEventListener('click', () => {
  let word = inputSearch.value.trim().toLowerCase().toString();
  for (let i = 0; i < allEl.length; i++) {
    let a = allEl[i].textContent.trim().toLocaleLowerCase().includes(word);
    let coord = allEl[i].getBoundingClientRect();
    if (a) {
      window.scrollTo(0, coord.top);
      break;
    }
  }
})

// Navigation

const navList = document.querySelectorAll('.item-theme');
const themeList = document.querySelectorAll('.course__theme');

function showTheme(ev) {
  const className = ev.target.classList[2];
  const numberTheme = className.slice(-3);
  const theme = document.querySelector('.course__theme--' + numberTheme);
  const navTheme = document.querySelector('.item-theme--' + numberTheme);
  
  for (let i =0; i < themeList.length; i++) {
    themeList[i].classList.add('disable');
  }

  for (let i = 0; i < navList.length; i++) {
    navList[i].classList.remove('active');
  }

  navTheme.classList.add('active');
  theme.classList.remove('disable');

}

for (let i = 0; i < navList.length; i++) {
  navList[i].addEventListener('click', showTheme)
}



// Test 1
const options = document.querySelectorAll('.course__example-1 .course__example-option');
const option = document.querySelector('.course__example-1 .course__example-options');
const answer = document.querySelector('.course__example-1 .course__example-answers');
const btnAnswer = document.querySelector('.course__btn-example-1');
const result = document.querySelector('.course__example-result-1');
const rightAnswer = [ '3', '2', '4', '1', '5' ];

for (let i = 0; i < options.length; i++) {
  options[i].addEventListener('click', (ev) => {
    let num = ev.target.classList[1].slice(-1);
    if (ev.target.parentNode.classList[0] == 'course__example-options') {
      answer.append(ev.target);
      document.querySelector('.course__example-1 .course__example-empty--' + num).classList.toggle('disable');
    } else {
      option.append(ev.target);
      document.querySelector('.course__example-1 .course__example-empty--' + num).classList.toggle('disable');
    }
  })
}

btnAnswer.addEventListener('click', () => {
  const el = answer.children;
  const curAnswer = [];
  
  for (let i = 0; i < el.length; i++) {
    curAnswer.push(el[i].classList[1].slice(-1));
  }

  if (JSON.stringify(curAnswer) == JSON.stringify(rightAnswer)) {
    result.textContent = 'Верно';
  } else {
    result.textContent = 'Неверно';
  }

})



// Test 2

const btnExample2 = document.querySelector('.course__btn-example-2');
const areaExample2 = document.querySelector('.course__example-area');

btnExample2.addEventListener('click', () => {
  if (areaExample2.value == '12.5') {
    areaExample2.classList.remove('wrong');
    areaExample2.classList.remove('right');
    areaExample2.classList.add('right');
  } else {
    areaExample2.classList.remove('wrong');
    areaExample2.classList.remove('right');
    areaExample2.classList.add('wrong');
  }
})

// Test 3

const inputsEx3 = document.querySelectorAll('.course__example--3 input');
const resultEx3 = document.querySelector('.course__example-result-3');
const btnRessultEx3 = document.querySelector('.course__btn-example-3');


btnRessultEx3.addEventListener('click', () => {
  if (inputsEx3[0].checked & inputsEx3[2].checked & inputsEx3[4].checked) {
    resultEx3.textContent = 'Verno';
  } else {
    resultEx3.textContent = 'Neverno';
  }
})


// Test 4

const inputsEx4 = document.querySelectorAll('.course__example--4 input');
const resultEx4 = document.querySelector('.course__example-result-4');
const btnRessultEx4 = document.querySelector('.course__btn-example-4');


btnRessultEx4.addEventListener('click', () => {
  if (inputsEx4[2].checked) {
    resultEx4.textContent = 'Verno';
  } else {
    resultEx4.textContent = 'Neverno';
  }
})



// Test 5

const inputsEx5 = document.querySelectorAll('.course__example--5 input');
const resultEx5 = document.querySelector('.course__example-result-5');
const btnRessultEx5 = document.querySelector('.course__btn-example-5');


btnRessultEx5.addEventListener('click', () => {
  if (inputsEx5[2].checked) {
    resultEx5.textContent = 'Verno';
  } else {
    resultEx5.textContent = 'Neverno';
  }
})

// Test 6

const options6 = document.querySelectorAll('.course__example-6 .course__example-option');
const option6 = document.querySelector('.course__example-6 .course__example-options');
const answer6 = document.querySelector('.course__example-6 .course__example-answers');
const btnAnswer6 = document.querySelector('.course__btn-example-6');
const result6 = document.querySelector('.course__example-result-6');
const rightAnswer6 = [ '3', '1', '2', '4', '5' ];

for (let i = 0; i < options6.length; i++) {
  options6[i].addEventListener('click', (ev) => {
    let num = ev.target.classList[1].slice(-1);
    if (ev.target.parentNode.classList[0] == 'course__example-options') {
      answer6.append(ev.target);
      document.querySelector('.course__example-6 .course__example-empty--' + num).classList.toggle('disable');
    } else {
      option6.append(ev.target);
      document.querySelector('.course__example-6 .course__example-empty--' + num).classList.toggle('disable');
    }
  })
}

btnAnswer6.addEventListener('click', () => {
  const el = answer6.children;
  const curAnswer = [];
  
  for (let i = 0; i < el.length; i++) {
    curAnswer.push(el[i].classList[1].slice(-1));
  }

  if (JSON.stringify(curAnswer) == JSON.stringify(rightAnswer6)) {
    result6.textContent = 'Верно';
  } else {
    result6.textContent = 'Неверно';
  }

})



// Test 7

const inputsEx7 = document.querySelectorAll('.course__example--7 input');
const resultEx7 = document.querySelector('.course__example-result-7');
const btnResultEx7 = document.querySelector('.course__btn-example-7');


btnResultEx7.addEventListener('click', () => {
  if (inputsEx7[1].checked) {
    resultEx7.textContent = 'Verno';
  } else {
    resultEx7.textContent = 'Neverno';
  }
})
