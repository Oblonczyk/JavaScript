//VAR E LET

//Atualmente usar var para declarar variáveis é algo ultrapassado, o let é mais utilizado

//Palavras reservadas não podem ser usadas para nomear variáveis
//O nome de uma variável não pode ser iniciado com um numero
//Uma variavel não pode possuir espaços ou traços
//Não podemos atribuir um novo valor a uma variavel usando let

//Sempre que houver mais de um nome a ser atribuido na variavel, utilize camelCase
//As variáveis são case sensitive, ou seja, distinguem Maiúsculo e Minúsculo

let value;  //uma variavel sem valor declarado possui um valor "Undefined"

let nome = 'João';  //neste momento a variável é inicializada

nome = 'Pedro'

console.log(nome + ' nasceu em 1984');
console.log('Em 2000 ' + nome + ' conheceu Maria');
console.log(nome + ' casou-se com Maria em 2012');
console.log('Maria teve 1 filho com ' + nome +' em 2015');
console.log('O filho de '+ nome +' se chama Eduardo.');

// sinal de + é usado para concatenar strings e para somar valores

//DIFERENÇAS ENTRE VAR E LET

//Se voce criar uma VAR e redeclarar deveria gerar um erro, pois esta sendo declarada novamente
//Usando LET há a possibilidade de redeclarar a variavel mas sem, na nova declaração, escrever o LET antes do nome da variavel 