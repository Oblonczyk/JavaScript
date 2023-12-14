// Um array pode ser imaginado como uma lista de coisas

const alunos = ['Vinycius', 'Eduardo', 'Giovana']; //pode-se inserir qualquer tipo de dados dentro de um array, mas não é uma boa pratica de programação misturar tipos

console.log(alunos[0]); // exibe somente o indice inserido entre os colchetes

alunos[2] = 'Gian'; // altera o indice inserido entre colchetes
alunos[3] = 'Jackeline'; // adiciona um novo indice no array, mas é necessario inserir a posição que será ocupada pelo dado
console.log(alunos);

console.log(alunos.length); // para contar quantos elementos tem no array

alunos.push('Giovana'); //adiciona um indice ao final do array
alunos[alunos.length] = 'Haryel' //Tambem adiciona no fim do array
console.log(alunos);

alunos.unshift('Caio'); // adiciona um indice no inicio do array
alunos.unshift('Gian'); // adiciona um indice no inicio do array
console.log(alunos);

alunos.pop(); // remove o ultimo indice de um array
const removido = alunos.pop(); // salva o valor removido em uma variável
console.log(alunos);
console.log(removido);

alunos.shift(); // remove o primeiro indice de um array; altera os indices
const removidoC = alunos.shift(); // salva o valor removido em uma variável
console.log(alunos);
console.log(removido);

delete alunos[1]; // apaga e deixa o indice vazio
console.log(alunos);

console.log(alunos.slice(0, 2)); // exibe somente os indices selecionados; o ultimo numero declarado deve ser o posterior ao ultimo dado desejado

console.log(alunos.slice(0, -1)); // conta os indices e conta até o resultado menos o segundo numero; o ultimo numero declarado deve ser o posterior ao ultimo dado desejado

console.log(alunos instanceof Array); // se a variavel for um obj de array retorna true, senão retorna false