
let numerosInteiros = [4, 2, -10, 5, 6, 54];
let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function verificaPalindromo (string) {
    let size = string.length;
    let index = size - 1;
    let counter = 0;
    for (let i = 0; i < size; i += 1){
        if( string[i] === string[index - i] ) {
            counter += 1;
        }
    }

    if (counter === size){
        return true;
    } else {
        return false; 
    }
}

console.log(verificaPalindromo('natan'));

function verificaMaiorValor(array){
  
    for (let i = 0; i < array.length; i += 1){
        let counter = 0;
        for (let x = 0; x < array.length; x += 1){
            if(array[i] > array[x]){
                counter += 1;
            }else if (array[i] !== array[x]) {
                break;
            }

            if(counter === array.length - 1){
                return i;
                break;
            }
        }
    }
}

console.log('maior numero inteiro: ',verificaMaiorValor(numerosInteiros));

function verificaMenorValor(array){
  
    for (let i = 0; i < array.length; i += 1){
        let counter = 0;
        for (let x = 0; x < array.length; x += 1){
            if(array[i] < array[x]){
                counter += 1;
            }else if (array[i] !== array[x]) {
                break;
            }

            if(counter === array.length - 1){
                return i;
                break;
            }
        }
    }
}

console.log('Menor numero inteiro: ',verificaMenorValor(numerosInteiros));

function maiorNome(nomes){

}