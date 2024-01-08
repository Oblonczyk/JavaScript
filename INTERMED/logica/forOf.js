// for of nao funciona com objetos pois não é uma variavel iteravel(não possui indice)

const nome = ['Vinycius', 'Gabriel'];

for (let valor of nome) { // não trás o indice e sim o valor dos indices
    console.log(valor);
}

nome.forEach(function(valor, indice, array){ // trará os respectivos valores do array
    console.log(valor, indice, array);
});

// for clássico - Geralmente com iteráveis (array ou string)
// for in - Retorna o indice ou chave (string, array ou objetos)
// for of - Retorna o valor em si (iteráveis, arrays ou strings)
