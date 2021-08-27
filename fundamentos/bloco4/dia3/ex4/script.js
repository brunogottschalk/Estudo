let n = 5;
let asteriscos = '';
let espacos = n;


for (let x = 0; x < n ; x+=1) {
 
    for (let i = espacos; i > 1; i -= 1 ) {
        asteriscos += ' ';
    }
    
    for (let y = 0; y <= x; y +=1){
        asteriscos += '*';
    }

    espacos -= 1;
    console.log(asteriscos);
    asteriscos = '';
}