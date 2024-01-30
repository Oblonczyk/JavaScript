// Map cria um novo array com o mesmo numero de indices com novos valores
// Map altera o objeto original quando não se usa spread (...var)

// Dobre os valores
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobro = numeros.map(valor => valor * 2);
console.log(dobro);

console.log('#################');

//Para cada elemento:
const pessoas = [
    { nome: 'Vinycius', idade: 20 },
    { nome: 'João', idade: 16 },
    { nome: 'Paulo', idade: 35 },
    { nome: 'Adriano', idade: 10 },
    { nome: 'Mariana', idade: 66 },
    { nome: 'Sara', idade: 29 }
];

// Retorne apenas uma String com o nome da pessoa
const nomes = pessoas.map(valor => valor.nome);
console.log(nomes);

console.log('#################');

// Remova apenas a chave nome do objeto
const idades = pessoas.map(valor => ({ idade : valor.idade})); // transformado em expressão
console.log(idades);

console.log('#################');

// Adicione uma chave id em cada objeto
const comID = pessoas.map((obj, indice) => {
    obj.id = (indice + 1);
    return obj;
});
console.log(comID);
