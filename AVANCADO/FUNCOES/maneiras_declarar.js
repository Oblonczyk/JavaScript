//Aqui ocorre o Function Hoisting (eleva as declarações de função e var para o topo do código JS)

function falaOi() { // Declaração de função padrão
    console.log('oi')
}
falaOi();

// Funções são objetos de primeira classe, ou seja, podem ser tratadas em JS e em outras linguagens de programação, podem ser tratados como dados

// Function expression
const souUmDado = function() {
    console.log('Sou um dado');
};

function executaFuncao (funcao) {
    funcao(); // Executa o parametro 'funcao'
}
executaFuncao(souUmDado);

// Arrow Function (é uma Function Expression mais curta);
const funcaoArrow = () => {
    console.log('Sou uma arrow function')
};
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar : function () { // forma 1 de fazer uma função dentro de um objeto
        console.log('Estou falando...');
    },
    conversar() { // forma 2 de fazer uma função dentro de um objeto
        console.log('Estou conversando...');
    }
}

console.log(obj.falar(), obj.conversar());
