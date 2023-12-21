function meuEscopo () {
    const form = document.querySelector('.form'); //seletor igual ao do CSS (. para class e # para id)
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    // form.onsubmit = function (event) {
    //     event.preventDefault();
    //     alert(1);
    //     console.log('Foi enviado');
    // };

    function recebeEventoForm (event) {
        event.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const idade = form.querySelector('.idade');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome : nome.value,
            sobrenome : sobrenome.value,
            idade : idade.value,
            peso : peso.value,
            altura : altura.value
        });

        resultado.innerHTML += nome.value + ' ' + sobrenome.value + ' ' + idade.value + ' ' + peso.value + ' ' + altura.value;

        console.log(nome.value, sobrenome.value, idade.value, peso.value, altura.value);
    };

    console.log(pessoas);

    form.addEventListener('submit', recebeEventoForm)
}

meuEscopo();