function* geradora1() { // sempre usar o * em funcoes geradoras
    // Código qualquer
    yield 'Valor 1'; // na primeira vez que chamar
    // Código qualquer
    yield 'Valor 2'; // na segunda vez que chamar
    // Código qualquer
    yield 'Valor 3'; // na terceira vez que chamar
}
const g1 = geradora1();
console.log(g1.next()); // retorna e valor e se ja gerou tudo que tem no escopo
console.log(g1.next()); // sempre que chamar retorna o prox valor
console.log(g1.next().value); // trará somente o valor
console.log(g1.next()); // sempre que terminar o valor sera undefined e done será true


function* geradora2 () { // gerador inifinito (perigoso)
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}
const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);


function* geradora3 () {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4 () {
    yield*geradora3();
    yield 3;
    yield 4;
    yield 5;
}
const g4 = geradora4();
for(let valor of g4) {
    console.log(valor);
}

function* geradora5() {
    yield function() {
        console.log('Vim do y1');
    };

    yield function() {
        console.log('Vim do y2');
    }
}
const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();

// o yield permite que a função seja executada até ele, e continue no próximo yield (como um pause)
