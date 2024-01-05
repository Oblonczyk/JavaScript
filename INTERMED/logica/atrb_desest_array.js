const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [um, , tres, quatro, , seis,...rest] = numeros; // aqui foram criadas 2 constantes que tem o valor dos indices 0 e 1 respectivamente
// ... rest, ...spread (/a constante '...rest' é um operador que reservará o restante dos valores)

console.log(um, tres, quatro, seis);
console.log(...rest);

const arrays = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

const [,[,,seis2]] = arrays; // gera uma complexidade
console.log(seis2);

const [lista1, lista2, lista3] = arrays; // funciona exatamente como acima, mas torna mais facil
console.log(lista3[2]);

console.log(arrays[1][2]); // nesse caso voce acessa o array e posteriormento o numero dentro desse array
