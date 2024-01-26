const nomes = ['Vinycius', 'Maria', 'Joana', 'Abel', 'Marcelo']; //array literal
nomes[2] = 'João';
console.log(nomes);

console.log('############');

delete nomes[2];
console.log(nomes);

console.log('############');

const novo = nomes;  // altera ambos os valores (novo e nomes)
novo.pop(); // remove do final
console.log(nomes);

console.log('############');

const denovo = [...nomes];  // não vai afetar o array nomes
denovo.shift(); // remove do começo
denovo.push('Jonathan'); // add no final
denovo.unshift('Pedro'); // add no começo
console.log(denovo);

console.log('############');

const fatia = denovo.slice(1, 3); // fatia os indices indicados
console.log(fatia)

console.log('############');

const separa = 'Vinycius Gabriel Oblonczyk';
const separado = separa.split(' ');
console.log(separado);

console.log('############');

const junta = ['Vinycius', 'Gabriel', 'Oblonczyk'];
const junto = junta.join(' ');
console.log(junto);

// String, Numeros e etc
const sobrenomes = new Array('Cardoso', 'Silva', 'Pereira'); // outra forma de declarar
