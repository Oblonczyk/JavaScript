// IIFE -> Immediately invoked function expression (função imediata)
(function(idade, peso, altura) {

    const sobrenome = 'Oblonczyk';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Vinycius'));
    }

    falaNome();
    console.log(idade, peso, altura);

})(20, 78, 1.81); // aqui são passados os valores dos parametros da função

// a unica diferença é que a funcao deve estar dentro de parenteses e deve haver um parentese com os valores dos parametros ao final
