//Palavras reservadas não podem ser usadas para nomear constantes
//O nome de uma constamte não pode ser iniciado com um numero
//Uma constante não pode possuir espaços ou traços
//Não podemos alterar um novo valor a uma constante

//Sempre que houver mais de um nome a ser atribuido na constante, utilize camelCase
//As variáveis são case sensitive, ou seja, distinguem Maiúsculo e Minúsculo

const primeiroNumero = 5;
const segundoNumero = '9';
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
const resultadoTriplicado = resultado * 3;

console.log(typeof(segundoNumero));  //typeof serve para que possamos descobrir qual o tipo do valor atribuido

console.log(typeof(primeiroNumero + segundoNumero)); // sinal de + é usado para concatenar strings e para somar valores