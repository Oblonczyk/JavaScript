// Filter vai sempre retornar um array com a mesma quantidade de elementos que o array original ou menos

// Retorne numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const callbackFilter = (valor) => { // (valor, indice, array)
    console.log(valor);
    return valor > 10; // retorna boolean
}
const numerosFiltrados = numeros.filter(callbackFilter); 

console.log(numerosFiltrados);

console.log('#################');

const pessoas = [
    { nome: 'Vinycius', idade: 20 },
    { nome: 'João', idade: 16 },
    { nome: 'Paulo', idade: 35 },
    { nome: 'Adriano', idade: 10 },
    { nome: 'Mariana', idade: 66 },
    { nome: 'Sara', idade: 29 }
];

// Retorne pessoas cujo nome possui 5 ou mais letras
const pessoaComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoaComNomeGrande);

console.log('#################');

// Retorno as pessoas com mais de 50 anos
const pessoaMaisCinquenta = pessoas.filter(obj => obj.idade > 50);
console.log(pessoaMaisCinquenta);

console.log('#################');

const pessoasNomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(pessoasNomeTerminaComA);
