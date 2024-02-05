const falar = { // definindo método
    falar() {
        console.log(`${this.nome} está falando.`);
    }
};

const comer = { // definindo método
    comer() {
        console.log(`${this.nome} está comendo.`);
    }
};

const beber = { // definindo método
    beber() {
        console.log(`${this.nome} está bebendo.`);
    }
};

const pessoaPrototype = { ...falar, ...comer, ...beber }; // acoplando método no Prototype da pessoa
// const pessoaPrototype = Object.assign({}, falar, comer, beber); // acoplando método no Prototype da pessoa

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, { // assim se cria o Prototype e enfim o objeto, que pode ser definido com enumerable, value e etc.
        nome : { value : nome },
        sobrenome : { value : sobrenome }
    });
}

const p1 = criaPessoa('Vinycius', 'Oblonczyk');
const p2 = criaPessoa('Maria', 'Joana');
console.log(p1);
