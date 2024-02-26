// FUNCIONA COMO UMA FUNÇÃO CONSTRUTORA

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() { // está no prototype
        console.log(`${this.nome} está falando`);
    }

    comer() { // está no prototype
        console.log(`${this.nome} está comendo`);
    }

    beber() { // está no prototype
        console.log(`${this.nome} está beber`);
    }
}

const Pessoa2 = function(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
};

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando`)};
Pessoa2.prototype.comer = function() {
    console.log(`${this.nome} está falando`)};
Pessoa2.prototype.beber = function() {
    console.log(`${this.nome} está falando`)};

const p1 = new Pessoa('Vinycius', 'Oblonczyk');
console.log(p1);

const p2 = new Pessoa2('Maria', 'Mosconi');
console.log(p2);
