const nome = "Vinycius Gabriel";
const sobrenome = "Oblonczyk";
const idade = 20;
const peso = 75.6;
const altura = 1.81;
let imc;
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2003;

console.log("Meu nome é " + nome + " " + sobrenome + ", tenho " + idade + " anos de idade (nasci em " + anoNascimento + "), peso " + peso + "KG e possuo " + altura + "m de altura. Portanto meu IMC é de " + imc);