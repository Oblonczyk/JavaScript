function funcao(mensagem) { //Posso definir parametros
    console.log(mensagem);
}
funcao('Oi'); // Passo o valor do parametro dentro dos parenteses, na ordem que esta definido no corpo da função


// Quando se define uma função usando a palavra 'function', é possivel utilizar uma variavel nativa da linguagem chamada 'arguments'

function funcao2(a, b, c, d, e, f) { // Não há parametros definidos
    console.log(arguments, a, b, c, d, e, f); // A variável armazena tudo em um objeto que se assemelha a um array
}
funcao2(1, 2, 3, 4, 5, 6); // Aqui são definidos os valores de 'arguments'


function soma(a, b = 2, c = 4) { // forma moderna de solucionar
    // b = b || 0; // se b não for definido ele vale 0 (solução antiga)
    console.log(a + b + c);
}
soma(2, undefined, 20); // usando undefined assume o valor padrão do parametro


function atbDeses({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}

let obj = { nome : 'Vinycius', sobrenome : 'Gabriel', idade : 20 };
atbDeses(obj);


function array([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
array(['Vinycius Gabriel', 'Oblonczyk', 20]);


const conta = function conta(operador, acumulador, ...numeros) { // Os ... é chamado de 'rest operator', que armazena o resto dos valores (sempre o ultimo parametro)
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }

    console.log(acumulador);
};
conta('+', 1, 20, 30, 40, 50);
