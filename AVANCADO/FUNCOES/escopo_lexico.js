// se uma variavel for lida dentro de uma função ela sempre irá buscar nela e posteriormente no pai da função, e no pai do pai...

const nome = 'Vinycius';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Gabriel';
    falaNome(); // a função lembra onde foi declarada e todos seus vizinhos (nada na função que a usa ira alterar ela ou o escopo lexico)
}
usaFalaNome();
