// FORMAS DE CRIAR

// Literal
const pessoa = {
    nome : 'Vinycius',
    sobrenome : 'Oblonczyk',
    idade : 20
};

const chave = 'idade';
console.log(pessoa.nome, pessoa['sobrenome'], pessoa[chave]); // anotacao de colchete para valor dinamico

// Construtor

const pessoa1 = new Object();
pessoa1.nome = 'Mel';
pessoa1.sobrenome = 'Franco';
pessoa1.idade = 20

const chave1 = 'idade'
console.log(pessoa1.nome, pessoa1['sobrenome'], pessoa[chave1]);

// Deletar

delete pessoa.sobrenome;
console.log(pessoa);

// Funcoes e Metodos

pessoa1.falarNome = function() {
    return(`${pessoa1.nome} está falando seu nome.`)
};
console.log(pessoa1.falarNome());

pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - pessoa1.idade;
};
console.log(pessoa1.getDataNascimento());

// For

for (let chave1 in pessoa1) {
    console.log(pessoa1[chave1]);
};

// Factory function (padrões de projeto)

const criaPessoa = (nome, sobrenome) => {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return`${nome} ${sobrenome}`;
        }
    };
};
const p1 = criaPessoa('Maria', 'Joana');
console.log(p1.nomeCompleto());

// Constructor Function (padrões de projeto)
function Pessoa(nome, sobrenome) { // só funciona com a palavra function
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this); // Inibe alterações no Objeto
};
const p2 = new Pessoa('Luiz', 'Miranda');
console.log(p2);
