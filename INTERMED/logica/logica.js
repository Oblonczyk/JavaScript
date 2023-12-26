// OPERADORES DE COMPARAÇÃO

// > maior
// >= maior ou igual
// < menor
// <= menor ou igual
// == igual NAO SE UTILIZA MUITO
// === igual estrito (alem do valor tambem analisa o tipo de dado)
// != diferente NAO SE UTILIZA MUITO
// !== diferente estrito (alem do valor tambem analisa o tipo de dado)

//--------------------------------------------------------------------------------------------------------

// OPERADORES DE COMPARACAO

// && -> AND -> E
// || -> OR -> OU
// ! -> NOT -> NAO

// avaliacao de curto circuito (chega a expressão e exibe o primeiro valor false que houver)
// && -> false && true -> false "o valor mesmo"
console.log('Vinycius' && 0 && 'Mel'); //nesse caso retorna 0, que seria o valor 'false', e exibe esse valor
console.log('Vinycius' && true && 'Mel'); //nesse caso retorna 'Mel', visto que é o ultimo valor, mesmo que seja verdadeiro

console.log(false || null || 'Mel' || true); //no caso do OR o javascript vai retornar o primeiro valor true que encontrar

//--------------------------------------------------------------------------------------------------------------------------

/*
VALORES AVALIADOS EM FALSE

false
0
"" '' `` (strings vazias)
null / undefined
NaN

*/

function falaOi () {
    return 'Oi';
}

let vaiExecutar; //resultado undefined, ou seja, false

console.log(vaiExecutar && falaOi());