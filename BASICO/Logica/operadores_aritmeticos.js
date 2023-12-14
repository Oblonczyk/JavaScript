// OPERADORES

const num1 = 3;
const num2 = 10;
const letra = 'A';

// + Adição / Concatenação
console.log(num1 + num2);
console.log(letra + num1);

// - Subtração
console.log(num2 - num1);

// / Divisão
console.log(num2 / num1);

// * Multiplicação
console.log(num1 * num2);

// ** Potenciação
console.log(num1 ** num2)

// % Resto da divisão
console.log(num1 % num2)


//PRECEDENCIA

/*

()
**
* / %
+ -

*/

// INCREMENTO E DECREMENTO

/* 
Incremento = ++
Decremento = --

Operadores de atribuição (+=, -=, *=, /=, **=, %= )
*/

let contador = 1;

contador++; //le o valor e acrescenta +1, não pode ser usado com constantes
++contador; //acrescenta +1 e le o valor, não pode ser usado com constantes

contador--; //le o valor e decrementa -1, não pode ser usado com constantes
--contador; //decrementa -1 e le o valor, não pode ser usado com constantes

console.log(contador);

contador = contador + 2; //usado para incrementar um valor maior que 1
contador += 2; //uma forma resumida de fazer a mesma operação acima
// funciona com todos operadores

console.log(contador);

console.log(contador++); //incrementar e decrementar dentro do console.log é uma má prática de programação

const number = 1;
const number1 = parseInt('6'); //converte uma string para numero inteiro
const number2 = parseFloat('5.2'); //converte uma string para numero decimais
const number3 = Number(5.8) //ira identificar sozinho se é inteiro ou decimal

console.log(number + number1 + number2 + number3);