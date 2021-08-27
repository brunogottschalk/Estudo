let fruits = [3, 4, 10, 1, 12];

/*
criar uma variavel x para armazenar a soma dos valores de fruit
adicionar um for para percorrer todo o fruits{
    armazenar o valor de fruits na variavel valorSomado
    incrementar 1 no indice da variavel fruits
}
*/ 

let valorSomado = 0; 

for (let i = 0; i < fruits.length; i += 1) {
    valorSomado += fruits[i];
}

console.log(valorSomado);