let listItens = document.querySelector('#list-type');
let foods = ['lasanha','pizza','feijao','arroz','macarrao'];
let itens;

for (let x = 0; x < foods.length; x += 1) {
  itens = document.createElement('li');
  itens.innerText = foods[x];
  itens.className = 'item';

  listItens.appendChild(itens);
}

// removendo algum item
let foodList = document.querySelectorAll('.item');
for (let x = 0; x < foods.length; x += 1) {
  if (foodList[x].innerText.includes('feijao')) {
    listItens.removeChild(foodList[x]);
  }
}