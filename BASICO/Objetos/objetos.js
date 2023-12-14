const pessoa1 = { // um objeto é declarado usando '{}'
    nome : 'Vinycius',
    sobrenome : 'Oblonczyk',
    idade : 20 // os parametros devem ser passados como (nome : valor)
};

console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);


function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade }; // pode ser declarado de forma simplificada
}

const pessoa2 = criaPessoa('Vinycius', 'Oblonczyk', 20); // facilita a criação de multiplos dados
console.log(pessoa2);

const pessoa3 = {
    nome : 'Vinycius',
    sobrenome : 'Oblonczyk',
    idade : 20,

    fala() {
        console.log(this.nome + this.sobrenome + ' está falando oi...'); // this é usado para referenciar os argumentos dentro da função, sem pegar nada de fora
        console.log('A minha idade atual é ' + this.idade);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa3.fala();
pessoa3.incrementaIdade();
pessoa3.fala();