function rand(max, min) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) * min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('Cai no erro');
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na Promise');
            return;
        }, tempo)
    });
}

// esperaAi('Fase 1', rand())
//     .then(value => {
//         console.log(value);
//         return esperaAi('Fase 2', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//         return esperaAi('Fase 3', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//         return fase
//     })
//     .then(fase => {
//         console.log('Terminamos na fase: ', fase)
//     })
//     .catch(e => console.error(e));

async function executa() { // async permite a utilização da palavra await dentro de uma função, para que voce aguarde a função ser finalizada
    try {
        const fase1 = await esperaAi('Fase 1', rand());
        console.log(fase1);

        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2);

        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase3);

        console.log('Terminamos na fase: ', fase3);
    } catch(e) {
        console.error(e);
    }
}
executa();

/*
ESTADOS DAS PROMISES

    Pendente - uma função sem then/await, que não espera a resposta da função

*/
