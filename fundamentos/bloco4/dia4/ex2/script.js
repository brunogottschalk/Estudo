
// let numerosInteiros = [4, 2, -10, 5, 6, 54];
// let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

// function verificaPalindromo (string) {
//     let size = string.length;
//     let index = size - 1;
//     let counter = 0;
//     for (let i = 0; i < size; i += 1){
//         if( string[i] === string[index - i] ) {
//             counter += 1;
//         }
//     }

//     if (counter === size){
//         return true;
//     } else {
//         return false; 
//     }
// }

// console.log(verificaPalindromo('natan'));

// function verificaMaiorValor(array){

//     for (let i = 0; i < array.length; i += 1){
//         let counter = 0;
//         for (let x = 0; x < array.length; x += 1){
//             if(array[i] > array[x]){
//                 counter += 1;
//             }else if (array[i] !== array[x]) {
//                 break;
//             }

//             if(counter === array.length - 1){
//                 return i;
//                 break;
//             }
//         }
//     }
// }

// console.log('maior numero inteiro: ',verificaMaiorValor(numerosInteiros));

// function verificaMenorValor(array){

//     for (let i = 0; i < array.length; i += 1){
//         let counter = 0;
//         for (let x = 0; x < array.length; x += 1){
//             if(array[i] < array[x]){
//                 counter += 1;
//             }else if (array[i] !== array[x]) {
//                 break;
//             }

//             if(counter === array.length - 1){
//                 return i;
//                 break;
//             }
//         }
//     }
// }

// console.log('Menor numero inteiro: ',verificaMenorValor(numerosInteiros));

// function maiorNome(nomes){

// }
// let string = 'Foguete';
// function splitSentence(string) {
//     // seu código aqui
//     let array= [''];
//     let index = 0;
//     for (let x = 0; x < string.length; x += 1) {

//       if(string[x] === ' ') {
//           index += 1;  
//           array[index] = ''; 
//       } else {
//           array[index] += string[x];
//       }
//     }
//     return array;
//   }

//   let array = splitSentence(string);
//   console.log(array);

// let array = ['Bruno', 'Lucas', 'Maria', 'Jose'];
// function concatName(array) {
//     // seu código aqui
//     let size = array.length - 1;
//     return (array[size] + ', ' + array[0]);
//   }

//   console.log(concatName(array));


// let numbers = [9, 1, 2, 3, 9, 5, 7];

// function highestCount(array) {
//   // seu código aqui
//   let counter = 0;
//   let higherNumber;
//   let higherNumberRepeat = 0;
//   for (let x = 0; x < array.length; x += 1) {
//     counter = 0;
//     for (let y = 0; y < array.length; y += 1) {
//       if(array[x] >= array[y]){
//         counter += 1;
//       }
//     }
//     if (counter === array.length){
//       higherNumber = array[x];
//     }
//   }

//   for (let x = 0; x < array.length; x += 1) {
//     if (array[x] === higherNumber) {
//       higherNumberRepeat += 1;
//     }
//   }
//   return higherNumberRepeat;
// }

// console.log(highestCount(numbers));

// function catAndMouse(mouse, cat1, cat2) {
//   // seu código aqui
//   deltaCat1 = mouse - cat1;
//   deltaCat2 = mouse- cat2;

//   if (deltaCat1 < 0){
//     deltaCat1 = deltaCat1 * (-1);
//   }

//   if (deltaCat2 < 0){
//     deltaCat2 = deltaCat2 * (-1);
//   }

//   if (deltaCat1 < deltaCat2){
//     return 'cat1';
//   } else if (deltaCat1 > deltaCat2) {
//     return 'cat2';
//   } else {
//     return 'os gatos trombam e o rato foge';
//   }
// }
  
// console.log(catAndMouse());

// let numbers =  [2, 15, 7, 9, 45];

// function fizzBuzz(array) {
//   // seu código aqui
//   let afterMath = [];

//   for (let x = 0; x < array.length; x += 1) {
//     if ( (array[x] % 3 === 0) && (array[x] % 5 === 0) ) {
//       afterMath.push('fizzBuzz');
//     } else if (array[x] % 5 === 0) {
//       afterMath.push('buzz');
//     } else if (array[x] % 3 === 0) {
//       afterMath.push('fizz');
//     } else {
//       afterMath.push('bug!');
//     }
//   }
//   return afterMath;
// }

// console.log(fizzBuzz(numbers));

// let phrase = 'h3 th2r2';

// function encode(string) {
//   // seu código aqui
//   let decoder = '';
//   for (let x = 0; x < string.length; x += 1) {

//     if (string[x] === '1') {
//       decoder += 'a';
//     } else if (string[x] === '2') {
//       decoder += 'e';
//     } else if (string[x] === '3') {
//       decoder += 'i';
//     } else if (string[x] === '4') {
//       decoder += 'o';
//     } else if (string[x] === '5') {
//       decoder += 'u';
//     } else {
//       decoder += string[x];
//     }
//   }
//   return decoder; 
// }

// console.log(encode(phrase));

// let tecnologias = ['HTML', 'CSS', 'Javascript', 'React'];

// function techList(array, nome) {
//   // seu código aqui
//   let techInfo = new Object();

//   if(array === ''){
//     return 'Vazio!';
//   }

//   for (let x = 0; x < array.length; x += 1) {
//     techInfo[x].tech = array[x];
//     techInfo[x].name = nome;
//     }
  
//   return techInfo;

// }

// console.log(techList(tecnologias,'Bruno'));

// let numero =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];

// function generatePhoneNumber(number) {
//   // seu código aqui
//   let counter = 0;
//   let phoneNumberConverter = '';
//   if (number.length > 11) {
//      return 'Array com tamanho incorreto.';
//   }
  
//   for (let x = 0; x < number.length; x += 1) {
//     counter = 0;
//     if (number[x] < 0 || number[x] > 9) {
//       return "não é possível gerar um número de telefone com esses valores";
//     }
//     for (let y = 0; y < number.length; y += 1) {
//       if (number[x] === number[y] && x !== y) {
//         counter += 1;
//       }
//       if (counter === 3) {
//         return "não é possível gerar um número de telefone com esses valores";
//       }
//     }
//   }

//   phoneNumberConverter = `(${number[0]}${number[1]}) ${number[2]}${number[3]}${number[4]}${number[5]}${number[6]}-${number[7]}${number[8]}${number[9]}${number[10]}`;

//   return phoneNumberConverter;
// }

// console.log(generatePhoneNumber(numero));

// function triangleCheck(lineA, lineB, lineC) {
//   // seu código aqui
//   let triangleChecker = false;

//   if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)){
//     triangleChecker = true;
//   } else if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
//     triangleChecker = true;
//   } else if (lineC < lineA + lineB && lineC < Math.abs(lineA - lineB)) {
//     triangleChecker = true;
//   }
//   return triangleChecker;
// }


// let string = "1 cachaça";

// function hydrate(string) {
//   // seu código aqui
//   number = '';
//   let drinksCounter = 0;

//   for (let x = 0; x < string.length; x += 1) {
//     if (string[x] >= 1 && string[x] <= 9){

//       if(string[x + 1] >= 0 && string[x + 1] <= 9 ){
//         number = string[x] + string[x + 1];
//         x += 1;
//         drinksCounter += parseInt(number);
//       }else {
//         drinksCounter += parseInt(string[x]);
//       }
//     }
//   }
  
//   if(drinksCounter > 1){
//     waterCups = drinksCounter + ' copos de água';
//   } else {
//     waterCups = drinksCounter + ' copo de água';
//   }

//   return waterCups;
// }
// console.log(hydrate(string));







let array = ["React", "Jest", "HTML", "CSS", "JavaScript"];
let nome = "Bruno";


function createObject (tecnologia, nome) {
  const obj = {};

  obj.tech = tecnologia;
  obj.name = nome;

  return obj;
}

function techList(array, nome) {
  // seu código aqui
  let techInfo = [{}];

  for (let x = 0; x < array.length; x += 1) {
    techInfo[x] = createObject(array[x], nome)
  }

  return techInfo;
}

console.log(techList(array, nome));