//Todas funções construtoras tem atrelado a elas a função .prototype

const objA = {
    chaveA : 'A'
};

const objB = {
    chaveB : 'B'
};

const objC = {
    chaveC : 'C'
};

Object.setPrototypeOf(objB, objA); // adiciona um prototype ao objeto (objRecebe, Protótipo)
Object.setPrototypeOf(objC, objB); // Usando essa função o prototype de obj C se torna o objB que se torna o objA (isso liga os objetos)
console.log(objB.chaveA);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
};

const p1 = new Produto('Camiseta', 50);
p1.aumento(15);
p1.desconto(10);
console.log(p1);

// Tambem pode-se fazer desta forma:
const p2 = {
    nome : 'Calça',
    preco : 120
};
Object.setPrototypeOf(p2, Produto.prototype); // Aqui estamos setando um prototype no Objeto
console.log(p2);

// Setando prototypes na criação de objetos
const p3 = Object.create(Produto.prototype, {
    nome : {
        writable : true,
        configurable : true,
        enumerable : true,
        value : 'Jaqueta'
    },
    preco : {
        writable : true,
        configurable : true,
        enumerable : true,
        value : 215
    }
}); // define o construtor.tras o prototipo, define os valores dos atributos
console.log(p3);
