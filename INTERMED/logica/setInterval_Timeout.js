const mostraHora = () => {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12 : false
    });
}

// Quando quiser trabalhar com intervalo de tempo use setInterval
// Ele determina um intervalo para que uma função seja executada em um momento X
// Nesse caso não há necessidade de colocar parenteses, visto que é somente para referencia

const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000); // O parametro 1 será a função de referencia, o 2 o tempo em milisegundos

// setTimeOut executa somente uma vez dependendo do intervalo

setTimeout(function () {
    clearInterval(timer); // pode ser usada para parar o timer
}, 5000)

setTimeout(function () {
    console.log('Olá Mundo!');
}, 6000);
