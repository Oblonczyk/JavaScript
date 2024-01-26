const nomes = ['Vinycius', 'Eduardo', 'Jackeline', 'Daniel','Giovana'];

// nomes.splice(indice, deleteQuant, elem1, elem2);

// pop
const removidos = nomes.splice(3, 0, 'Gian'); // cria um array com os dados retirados
console.log(nomes, removidos);

// shift
const removidos2 = nomes.splice(0, 1);
console.log(nomes, removidos);

// push
nomes.splice(nomes.length, 1, 'Caio'); // add ao indice escolhido o valor após a virgula
console.log(nomes);

// unshift
nomes.splice(0, 0, 'Vinycius', 'Haryel');
console.log(nomes);

const r = nomes.splice(4, Number.MAX_VALUE); // separa o indice até o valor maximo do array
