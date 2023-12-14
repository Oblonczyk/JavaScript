let num1 = 9.985214;

let num2 = Math.floor(num1); //arredonda para baixo
console.log(num2);

let num3 = Math.ceil(num1); //arredonda para cima
console.log(num3);

let num4 = Math.round(num1); //arredonda para o mais próximo (da metade para cima arredonda para cima)
console.log(num4);

console.log(Math.max(10, 2, 9, -6, 148, 234896, -222222)); //irá pegar o maior número da sequencia
console.log(Math.min(10, 2, 9, -6, 148, 234896, -222222)); //irá pegar o menor número da sequencia

const aleatorio = Math.random(); //gera um número aleatório
const result = aleatorio * (10 - 5) + 5; //o número aleatório tera um valor entre 5 e 10
console.log(result);

console.log(Math.PI);