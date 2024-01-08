// break e continue funcionam em todos laços ( for, for in, for of, while, do while )

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

    if (numero === 2 || numero === 5) {
        console.log('pulei o número')
        continue; // faz com que o laço de repetição pule para a próxima iteração sem que percorra o restante do código
    }

    if (numero === 7) {
        console.log('achei')
        break; // para o laço de repetição e não executa mais
    }

    console.log(numero);
}