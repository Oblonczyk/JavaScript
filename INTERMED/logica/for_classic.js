// é implementado por varias linguagens da mesma maneira

for (let i = 0; i <= 10; i ++) { // i = index (a titulo de curiosidade)
    const par = i % 2 === 0 ? 'par' : 'impar';
    // console.log(i, par);
}

const frutas = ['Maçã', 'Pera', 'Uva'];
for (let f = 0; f < frutas.length; f++){
    console.log(`Indice ${f} ${frutas[f]}`);
}
