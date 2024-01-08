function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const [ min, max ] = [ 1, 50 ]
let rand = 10;

// console.log(rand);

while (rand !== 10) { // checa a condição e depois executa o código
    rand = random(min, max)
    console.log(rand);
}

console.log('######');

do { //executa o código e depois checa a condição
    rand = random(min, max);
    console.log(rand);
} while(rand !== 10);

// let controle = 0;

// while (controle <= 10) {
//     // console.log(controle);
//     controle++; // se não houver essa linha haverá um laço infinito que trava o computador
// }
