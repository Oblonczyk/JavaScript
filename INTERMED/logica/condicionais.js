// IF pode ser usado sozinho
// Sempre que utilizo a palavra ELSE, preciso de um IF antes
// Eu posso ter vários ELSE IF na checagem
// Só posso ter um ELSE na checagem

const hora = 230;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
} else {
    console.log('Sua hora está estranha!')
}


const numero = 10;

if (numero >= 0 && numero <= 5) {
    console.log('O número esta entre 0 e 5');
} else if (numero >= 5 && numero <= 10) {
    console.log('O número esta entre 6 e 10');
} else {
    console.log('O número é maior que 10')
}
