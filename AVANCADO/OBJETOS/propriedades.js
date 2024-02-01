// defineProperty - defineProperties
function Produto(nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {
        enumerable : true, // mostra a chave
        value : estoque, // define valor
        writable : false, // permite alteração de valor
        configurable : true // permite reconfigurar a chave (fazer outro defineProperty)
    });

    Object.defineProperties(this, {
        nome : {
            enumerable : true, // mostra a chave
            value : estoque, // define valor
            writable : false, // permite alteração de valor
            configurable : true // permite reconfigurar a chave (fazer outro defineProperty)
        },
        preco : {
            enumerable : true, // mostra a chave
            value : estoque, // define valor 
            writable : false, // permite alteração de valor
            configurable : true // permite reconfigurar a chave (fazer outro defineProperty)
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
console.log(Object.keys(p1)); // trás as chaves que possuem enumerable : true


