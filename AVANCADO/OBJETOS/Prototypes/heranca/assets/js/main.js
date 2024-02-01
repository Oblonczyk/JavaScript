// Produto

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

const produto = new Produto('Gen', 10);
console.log(produto);

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

function Camiseta (nome, preco, cor) {
    Produto.call(this, nome, preco); //serve para linkar o Produto em Camiseta (herança)
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype); // serve para linkar os prototypes
Camiseta.prototype.constructor = Camiseta; // Define quem foi o construtor do Objeto

Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco); // (herança)
    this.material = material;
    Object.defineProperty(this, 'estoque', {
        get : function () {
            return estoque;
        },
        set : function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const camiseta = new Camiseta('Regata', 7.5, 'Branco');
const caneca = new Caneca('São Paulo', 15, 'Porcelana', 5);

console.log(caneca, camiseta);

//ORDEM : Object -> Prototype -> parentPrototype -> Object.prototype
