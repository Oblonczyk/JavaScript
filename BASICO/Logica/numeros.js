//IEEE 754-2008 (padrão seguido pelo JS para precisão dos numeros)

let num1 = 12;
let num2 = 2.5;

console.log(num1.toString() + num2); //toStrig transforma temporariamente em uma string, sem alterar o valor original

console.log(num1.toString(2)); //adicionando um 2 nos parenteses, voce obtem o numero em binário

console.log(num1.toFixed(2)); //toFixed vai arredondar o numero, tornando melhor a visualização do usuario; o numero dentro dos parenteses representa o numero de casas que será exibido

console.log(Number.isInteger(num1)); //retornará verdadeiro ou falso, dependendo se o numero é inteiro ou flutuante

let temp = num1 * '5';
console.log(Number.isNaN(temp)); //se a conta for um NaN (Not a Number) será retornado verdadeiro


num1 = num1.toString(); //dessa forma o valor de num1 seria substituido, deixando de ser number e tornando-se string

numero1 = 0.7;
numero2 = 0.1;

console.log(numero1 + numero2); //há uma imprecisão nos valores do resultado (coisa de milésimos)

numero1 += numero2;
numero1 += numero2;
numero1 += numero2;

numero1 = Number(numero1.toFixed(2)); // soluciona a inconsistencia(melhor opção)
numero1 = parseFloat(numero1.toFixed(2)); // tambem soluciona a inconsistencia
console.log(numero1);