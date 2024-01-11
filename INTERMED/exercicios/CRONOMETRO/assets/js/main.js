const cronometro = () => {

    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');

    const getTimeFromSeconds = (segundos) => {
        let data = new Date(segundos * 1000);

        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    };

    let segundos = 0;
    let timer;

    const iniciaRelogio = () => {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = getTimeFromSeconds(segundos);
        }, 1000);
    };

    document.addEventListener('click', function (e) {
        const elemento = e.target;

        if (elemento.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        } else if (elemento.classList.contains('pausar')) {
            relogio.classList.add('pausado');
            clearInterval(timer);
        } else if (elemento.classList.contains('zerar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00'
            segundos = 0;
        }
    })
}

cronometro();
