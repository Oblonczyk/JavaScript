//Escreva uma função que receba 2 números e retorne o maior deles

const comparaNum = (a, b) => {
    return a > b ? a : b;
};

const aleatorio = (min, max) => {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
};

const [ min, max ] = [ 1, 50 ]
const numA = aleatorio(min, max);
const numB = aleatorio(min, max);

console.log(numA, numB, comparaNum(numA, numB));
