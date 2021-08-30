

let Mat = {
    soma: (a,b)=>{return a+b},
    subtracao: (a,b)=>{return a-b},
    multiplicacao: (a,b)=>{return a*b},
    divisao: (a,b)=>{return a/b}
};

let idade = 20;
let monthsAlive = Mat.multiplicacao(20,12);

console.log(monthsAlive);