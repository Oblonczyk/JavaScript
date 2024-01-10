// Escreva uma função que recebe um numero

const fizzBuzz = (numero) => {
    let random = (min, max) => {
        const r = Math.random() * (max - min) + min;
        return Math.floor(r);
    };

    const [ min, max ] = [ 0, 100 ]
    numero = random(min, max);

    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 ) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    return numero;
};

for (let i = 0; i <= 100; i++){
    console.log(fizzBuzz(i))
}

// Se o numero for divisivel por 3 = Fizz
// Se o numero for divisivel por 5 = Buzz
// Se o numero for divisivel por 3 e 5 = FizzBuzz
// Se não for divisivel por nenhum retorna o próprio número
// Checar se o numero é realmente um numero
// Use a função com numeros de 0 a 100

