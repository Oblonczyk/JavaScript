function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== "string") reject(new Error);

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    })
};

esperaAi('Frase 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Frase 2', rand(1, 3));
    }) // sempre que chamar resolve será executado o then
    .then(resposta => {
       console.log(resposta);
       return esperaAi('Frase 3', rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('Eu serei o último a ser exibido.');
    })
    .catch(e => { // sempre o catch representa um erro
        console.log('ERRO: ', e);
    }); //sempre que chamar o reject será executado o catch
    