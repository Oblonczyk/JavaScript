let string = 'Um \'texto\''; // para abrir uma string com aspas e usar as mesmas aspas precisa-se usar a barra ivertida como caractere de escape

// As Strings são indexadas, ou seja, a primeira letra é o indice 0, a segunda o indice 1 e assim por diante

console.log(string[1]); // exibe no console somente o indice desejado

console.log(string.charAt(6)); // tem a mesma função mas não gera erro se sair do range

console.log(string.concat(' em ', ' um ', ' lindo dia.')); // Outra forma de concatenar

console.log(string.indexOf('texto')); // exibe em qual indice se inicia a string
console.log(string.indexOf('texto', 3)); // é possivel fazer uma busca iniciando em um indice especifico
console.log(string.lastIndexOf('m')); // exibe em qual indice se inicia a string de trás para frente
console.log(string.lastIndexOf('m',3)); // faz uma busca iniciando em um indice especifico de trás para frente

console.log(string.match(/[a-z]/g)); // vai retornar todas as letras minisculas, se o "g" trará somente os dados da pesquisa

console.log(string.search(/[a-z]/)); // ira encontrar o que foi passado na busca (semelhante ao indexOf mas aceita operações regulares)

console.log(string.replace('Um', 'Outro')); // substitui a palavra (no caso 'Um' por 'Outro')

console.log(string.length); // exibe o numero de caracteres da string

console.log(string.slice(2, 6)); // o indice final deve ser definido somando um ao ultimo caracter que quer exibir

console.log(string.split(' ')); // vai dividir os caracteres pelo caracter escolhido (nesse caso o "espaço")

console.log(string.toUpperCase()); // vai deixar os caracteres maiusculos
console.log(string.toLowerCase()); // vai deixar os caracteres minusculos