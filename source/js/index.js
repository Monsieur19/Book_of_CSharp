// Search

const allEl = document.querySelectorAll('p,div.course__notice, li');
const inputSearch = document.querySelector('.course__search-input');
const btnSearch = document.querySelector('.course__search-btn');

function deleteFinder(el) {
  el.classList.remove('finded');
}

btnSearch.addEventListener('click', () => {
  let word = inputSearch.value.trim().toLowerCase().toString();
  for (let i = 0; i < allEl.length; i++) {
    let a = allEl[i].textContent.trim().toLocaleLowerCase().includes(word);
    let coord = allEl[i].getBoundingClientRect();
    if (a) {
      window.scrollTo(0, coord.top - 300);
      allEl[i].classList.add('finded');
      setTimeout(deleteFinder, 9000, allEl[i]);
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

  window.scrollTo(0, 0);
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
const color1 = document.querySelector('.course__example-1 .course__example-bot');

for (let i = 0; i < options.length; i++) {
  options[i].addEventListener('click', (ev) => {
    let num = ev.target.classList[1].slice(-1);
    if (ev.target.parentNode.classList[0] == 'course__example-options') {
      answer.append(ev.target);
      document.querySelector('.course__example-1 .course__example-empty--' + num).classList.toggle('disable');
    } else {
      ev.target.classList.remove('right');
      ev.target.classList.remove('wrong');
      option.append(ev.target);
      document.querySelector('.course__example-1 .course__example-empty--' + num).classList.toggle('disable');
    }
  })
}

btnAnswer.addEventListener('click', () => {
  const el = answer.children;
  const answer2 = document.querySelectorAll('.course__example-1 .course__example-answers .course__example-option');

  for (let i = 0; i < answer2.length; i++) {
    if (JSON.stringify(answer2[i].classList[1].slice(-1)) == JSON.stringify(rightAnswer[i])) {
      answer2[i].classList.add('right');
    } else {
      answer2[i].classList.add('wrong');
    }
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
  for (let i = 0; i < inputsEx3.length; i++) {
    inputsEx3[i].classList.remove('right');
    inputsEx3[i].classList.remove('wrong');
    if (inputsEx3[i].checked) {
      if (i == 0 || i == 2 || i == 4) {
        inputsEx3[i].classList.add('right');
      } else {
        inputsEx3[i].classList.add('wrong');
      }
    }
  }
})


// Test 4

const inputsEx4 = document.querySelectorAll('.course__example--4 input');
const resultEx4 = document.querySelector('.course__example-result-4');
const btnRessultEx4 = document.querySelector('.course__btn-example-4');


btnRessultEx4.addEventListener('click', () => {
  for (let i = 0; i < inputsEx4.length; i++) {
    inputsEx4[i].classList.remove('right');
    inputsEx4[i].classList.remove('wrong');
    if (inputsEx4[i].checked) {
      if ( i == 2 ) {
        inputsEx4[i].classList.add('right');
      } else {
        inputsEx4[i].classList.add('wrong');
      }
    }
  }
})



// Test 5

const inputsEx5 = document.querySelectorAll('.course__example--5 input');
const resultEx5 = document.querySelector('.course__example-result-5');
const btnRessultEx5 = document.querySelector('.course__btn-example-5');


btnRessultEx5.addEventListener('click', () => {
  for (let i = 0; i < inputsEx4.length; i++) {
    inputsEx5[i].classList.remove('right');
    inputsEx5[i].classList.remove('wrong');
    if (inputsEx5[i].checked) {
      if ( i == 2 ) {
        inputsEx5[i].classList.add('right');
      } else {
        inputsEx5[i].classList.add('wrong');
      }
    }
  }
})

// Test 6

const options6 = document.querySelectorAll('.course__example-6 .course__example-option');
const option6 = document.querySelector('.course__example-6 .course__example-options');
const answer6 = document.querySelector('.course__example-6 .course__example-answers');
const btnAnswer6 = document.querySelector('.course__btn-example-6');
const result6 = document.querySelector('.course__example-result-6');
const rightAnswer6 = [ '3', '1', '2', '4', '5' ];
const color6 = document.querySelector('.course__example-6 .course__example-bot');

for (let i = 0; i < options6.length; i++) {
  options6[i].addEventListener('click', (ev) => {
    let num = ev.target.classList[1].slice(-1);
    if (ev.target.parentNode.classList[0] == 'course__example-options') {
      answer6.append(ev.target);
      document.querySelector('.course__example-6 .course__example-empty--' + num).classList.toggle('disable');
    } else {
      ev.target.classList.remove('right');
      ev.target.classList.remove('wrong');
      option6.append(ev.target);
      document.querySelector('.course__example-6 .course__example-empty--' + num).classList.toggle('disable');
    }
  })
}

btnAnswer6.addEventListener('click', () => {
  const el = answer6.children;
  const answer2 = document.querySelectorAll('.course__example-6 .course__example-answers .course__example-option');
  

  for (let i = 0; i < answer2.length; i++) {
    if (JSON.stringify(answer2[i].classList[1].slice(-1)) == JSON.stringify(rightAnswer6[i])) {
      answer2[i].classList.add('right');
    } else {
      answer2[i].classList.add('wrong');
    }
  }

})



// Test 7

const inputsEx7 = document.querySelectorAll('.course__example--7 input');
const resultEx7 = document.querySelector('.course__example-result-7');
const btnResultEx7 = document.querySelector('.course__btn-example-7');


btnResultEx7.addEventListener('click', () => {
  for (let i = 0; i < inputsEx4.length; i++) {
    inputsEx7[i].classList.remove('right');
    inputsEx7[i].classList.remove('wrong');
    if (inputsEx7[i].checked) {
      if ( i == 1 ) {
        inputsEx7[i].classList.add('right');
      } else {
        inputsEx7[i].classList.add('wrong');
      }
    }
  }
})

// Запустить код

const inputRun = document.querySelector('.course__input-run');
const btnRun = document.querySelector('.course__btn-run');

btnRun.addEventListener('click', () => {
  inputRun.value = '"Hello World!"'
})
