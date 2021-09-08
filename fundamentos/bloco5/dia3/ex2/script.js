let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');


  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

function createDays(dias) {
  let tabela = document.getElementById('days');

  for (let x = 0; x < dias.length; x += 1) {
    tabela.appendChild(document.createElement('li'));
    tabela.children[x].classList = 'day';
    tabela.children[x].innerText = dias[x];

    if (tabela.children[x].innerText == 24 || tabela.children[x].innerText == 25 || tabela.children[x].innerText == 31 ) {
      tabela.children[x].classList += ' holiday';
    }

    if (tabela.children[x].innerText == 4 || tabela.children[x].innerText == 11 || tabela.children[x].innerText == 18 || tabela.children[x].innerText == 25) {
      tabela.children[x].classList += ' friday';
    }
  }

}

createDays(dezDaysList);

function createButton(string) {
  let buttonsContainer = document.getElementsByClassName('buttons-container')[0];

  buttonsContainer.appendChild(document.createElement('button'));
  buttonsContainer.children[0].setAttribute('id','btn-holiday');
  buttonsContainer.children[0].innerText = string;
}

createButton("Feriados");

let button = document.getElementById('btn-holiday');

button.addEventListener('click', () => {
  let holiday = document.getElementsByClassName('holiday');

  for (let x = 0; x < holiday.length; x += 1) {
    
    if (holiday[x].style.backgroundColor === 'green') {
      holiday[x].style.backgroundColor = 'rgb(238,238,238)';
      holiday[x].style.color = '#777';
    }else {
      holiday[x].style.backgroundColor = 'green';
      holiday[x].style.color = 'white';
    }

  }
});

function createButtonFriday (string) {
  let buttonsContainer = document.getElementsByClassName('buttons-container')[0];
  buttonsContainer.appendChild(document.createElement('button'));
  buttonsContainer.children[1].classList = 'btn-friday';
  buttonsContainer.children[1].innerText = string;
}

createButtonFriday('Sexta-feira');

let sextaFeiraButton = document.getElementsByClassName('btn-friday')[0];

sextaFeiraButton.addEventListener('click',() => {
  let fridayDays = document.getElementsByClassName('friday');

  for (let x = 0; x < fridayDays.length; x += 1) {
    if (fridayDays[x].innerText === 'SEXTA-FEIRA'){

      switch (x) {
        case 0 : fridayDays[x].innerText = '4'
        break;
        case 1 : fridayDays[x].innerText = '11'
        break;
        case 2 : fridayDays[x].innerText = '18';
        break;
        case 3 : fridayDays[x].innerText = '25';
        break;
      }

    } else {
      fridayDays[x].innerText = 'SEXTA-FEIRA';
    }
  }

});

let days = document.getElementsByClassName('day');

for (let x = 0; x < days.length; x += 1) {

  days[x].addEventListener('mouseenter', (event) => {
    
    event.target.style.transform = 'scale(1.5)';
    event.target.style.transition = 'all 100ms';

  });

  days[x].addEventListener('mouseout', (event) => {
    
    event.target.style.transform = 'scale(1)';

  });

}

let addButton = document.getElementById('btn-add');

addButton.addEventListener('click', () => {
  let myTasks = document.getElementsByClassName('my-tasks')[0];
  let input = document.getElementById('task-input');

  myTasks.appendChild(document.createElement('span'));
  myTasks.lastChild.innerText = input.value;
});