function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (min - max) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(false);

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}
//-----------------------------------------------------------------------------------------
const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    'Outro valor'
];

Promise.all(promises) //passa um array de promises e ele te retorna um array de promises
    .then(function(valor){
        console.log(valor);
    })
    .catch(function(erro){
        console.error(erro);
    });

//-----------------------------------------------------------------------------------------
const promises1 = [
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5))
];

Promise.race(promises1) //sempre entrega a primeira promise a ser resolvida
    .then(function(valor){
        console.log(valor);
    })
    .catch(function(erro){
        console.error(erro);
    });

//------------------------------------------------------------------------------------------
function baixaPagina() {
    const emCache = true;
    if(emCache) {
        return Promise.resolve('Página em cache'); //entrega uma promise resolvida(p 'Promise.reject' faz o mesmo, mas cai no .catch)
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log(e));
