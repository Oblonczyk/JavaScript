function saudacao(nome){ // quando a função é declarada assim voce pode deixar sem ';' 
    return 'Bom dia ' + nome + '!'; // tudo que esta dentro da função pode ser somente exibido/executado dentro da função
}

saudacao('Vinycius'); // precisa dos parenteses para que o compilador entenda que a função está sendo executada;
saudacao('Felipe'); // dentro desse parenteses se passa o valor do Argumento

const variavel = saudacao('Lucas');
console.log(variavel); // a função sempre retorna undefined se não houver um return


function soma(x, y){
    const resultado = x + y; // não é possivel acessar uma Var fora da função diretamente
    return resultado;
    console.log('Olá Mundo!'); // Tudo abaixo de return não será executado
}

console.log(soma(2, 2));
console.log(soma()); // se não for passado valor algum para nenhum dos argumentos será retornado um NaN

const raiz = (z) => { // outra forma de declarar é através da arrow function, que substitui a palavra Function
    return z ** 0.5
};

console.log(raiz(9));
console.log(raiz(5));
console.log(raiz(4));