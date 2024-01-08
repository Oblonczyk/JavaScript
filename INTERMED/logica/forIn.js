// for in lê os indices (se array), ou as chaves (se objeto)

const frutas = ['Banana', 'Maçã', 'Pera', 'Uva']; // Pode ser chamado de vetor, visto que não possuir arrays dentro desse array

for (let indice in frutas) { 
    console.log(indice);
}

const pessoa = {
    nome : 'Vinycius',
    sobrenome : 'Oblonczyk',
    idade : 20
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

// formas de acessar chaves em objetos

console.log(pessoa.nome);
console.log(pessoa['nome']);