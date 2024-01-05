const verdadeira = true;

// A busca sera feita dentro do bloco que esta sendo executado, depois no maior bloco e por fim no escopo global

// Let tem escopo de bloco { ...bloco }

let nome = 'Vinycius'; // está dentro do escopo global
let nome1 = 'Vinycius';

if (verdadeira) {
    let nome = 'Gabriel'; // está dentro de um bloco, portanto é considerado diferente do let no escopo geral
    console.log(nome, nome1); // dará prioridade ao let que estiver dentro do bloco
}

// Var só tem escopo de função
// Var é redeclarada mesmo dentro de escopos não globais

function falaOi () {
    var name = 'Vinycius'; // o que esta dentro de uma função não pode ser requisitado fora, mas pode-se usar uma variavel que esteja fora da função

    if (verdadeira) {
        let name2 = 'Gabriel'; // o let pode ser usado somente dentro do bloco que foi declarado
        console.log(name2);
    }
}

falaOi();
