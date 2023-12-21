// Primitivos (imutaveis) - string, number, boolean, ubdefined, null (bigint, symbol)
let A = 'a';
let B = A; // B adquire o valor de A mas aponta para outro lugar na memória
console.log(A, B);

A = 'b'; // altera somente a variavel A
console.log(A, B);

// Referencia (mutável) - array, object, function

let a = [1, 2, 3];
let b = a; // tanto quanto b apontam para o mesmo espaço na memória
let c = [...a]; // nesse caso o valor de c é independente e aponta para outro lugar na memória
console.log(a, b);

a.push(4); // altera o valor de ambos
console.log(a, b);

b.pop();
console.log(a, b);