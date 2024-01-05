const pessoa = {
    nome : 'Vinycius',
    sobrenome : 'Oblonczyk',
    idade : 20,
    endereco : {
        rua : 'R Joao Querino Lopes',
        numero : 196
    } // um objeto dentro de outro objeto é completamente normal
};

const nomeP = pessoa.nome; // atrb normal

const { nome : teste = 'jurubeba', sobrenome, ...rest } = pessoa; 
// como a variavel tem o mesmo nome do atributo do objeto não há necessidade do 'pessoa.nome'

// caso o atributo nome não exista, o valor 'jurubeba' será usado

// 'nome : teste' equivale a 'atributo : nome da variavel'

const { endereco : { rua : r = 123456, numero },
    endereco
} = pessoa;

console.log(teste, sobrenome, rest);
console.log(r, numero, endereco);
