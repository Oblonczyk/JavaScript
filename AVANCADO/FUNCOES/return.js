const soma = (a, b) => {
    return a + b; // trás o retorno da função
};

console.log(soma(2, 5));

const soma2 = (a, b) => {
    console.log(a + b); // aqui será exibido o que a função faz e não o retorno da mesma
}

soma2(5, 2);

// se a funcao não retorna nada o retorno será undefined
// teremos funções que retornam e outras que executam uma ação independente do valor

const criaPessoa = (nome, sobrenome) => {
    return { nome, sobrenome};
};

const p1 = criaPessoa('Vinycius', 'Oblonczyk');
const p2 = criaPessoa('Luiz', 'Otávio');

console.log(typeof(p1));
console.log(typeof(p2));


function falaFrase (comeco) {
    function falaResto (resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá'); // passando valor do parametro comeco
const resto = fala('Mundo'); // passando valor do parametro resto
console.log(resto);


function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

// é possível retornar qualquer coisa na função return
