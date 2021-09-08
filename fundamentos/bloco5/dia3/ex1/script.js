const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
let elementsWithTechClass = document.getElementsByClassName('tech')

// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function techClass(event) {
  for (let x = 0; x < elementsWithTechClass.length; x += 1) {
    elementsWithTechClass[x].removeAttribute('class','tech');
  }
  let element = event.target;
  element.setAttribute('class','tech');
}

firstLi.addEventListener('click',techClass);
secondLi.addEventListener('click',techClass);
thirdLi.addEventListener('click',techClass);


// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

input.addEventListener('keydown',(event)=>{
  elementsWithTechClass[0].innerText = input.value;
})

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?

function myPortfolio(event) {
  window.location.href = 'https://brunogottschalk.github.io/';
}

myWebpage.addEventListener('dblclick',myPortfolio);


// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

function changeColor(event) {
  if (event.target.style.color === 'red') {
    event.target.style.color = 'white';
  } else {
    event.target.style.color = 'red';
  }
}

myWebpage.addEventListener('mouseover',changeColor);

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.