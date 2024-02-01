const produto = { nome : 'Produto', preco : 5.5 };

// ...spread copia os atributos de um objeto x para um objeto y
const caneca = {
    ...produto,
    material : 'porcelana'
};
caneca.nome = 'caneca';
caneca.preco = 12;
console.log(caneca);

//Object.assing(des, any) copia os atributos de um objeto x para um objeto y
const pote = Object.assign({}, produto, { material : 'plástico' });
pote.nome = 'marinex 1,5L';
pote.preco = 25;
console.log(pote);

// somente quando for copiar 1 atributo
const copo = { nome : produto.nome, preco : produto.preco };
copo.nome = 'stanley';
copo.preco = 155;
console.log(copo);

// Object.getPropertyDescriptor(o, 'prop') retorna a descrição da propriedade
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

// Object.values retorna os valores do objeto
console.log(Object.values(caneca));

// Object.entries separa cada propriedade e valor em um array
for (let [chave, valor] of Object.entries(caneca)) {
    console.log(chave, valor);
}

console.log('##################');

// JÁ VIMOS

// Object.keys (retorna as chaves)
console.log(Object.keys(pote));

// Object.freeze (congela o objeto)
Object.freeze(copo);

// Object.defineProperties (define várias propriedades)
// Object.defineProperty (define uma propriedade)
