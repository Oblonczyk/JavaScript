// tem como função reduzir a um unico elemento

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce((acumulador, valor) => {
    acumulador += valor;
    return acumulador;
}, 0); // o que vem após a virgula é o valor inicial ao que o acumulador iniciará(sem o numero o JS usará o primeiro valor do array)

console.log(total);

// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Vinycius', idade: 20 },
    { nome: 'João', idade: 16 },
    { nome: 'Paulo', idade: 35 },
    { nome: 'Adriano', idade: 10 },
    { nome: 'Mariana', idade: 66 },
    { nome: 'Sara', idade: 29 }
];
const maisVelha = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelha);
