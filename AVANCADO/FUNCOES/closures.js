// closure é a habilidade de uma função de acessar seu escopo léxico

function retornaFuncao(nome) {
    return function () { // tem acesso a 3 escopos
        return nome;
    };
}

const funcao = retornaFuncao('Vinycius'); // o closure pode ser alterado de função para função
const funcao2 = retornaFuncao('Gabriel');
console.log(funcao());
console.log(funcao2());
