const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTxt(diaSemana) {
    let diaSemanaTxt;

    switch (diaSemana) {
        case 0:
            diaSemanaTxt = 'Domingo';
            return diaSemanaTxt // return sai da função
        case 1:
            diaSemanaTxt = 'Segunda-feira';
            return diaSemanaTxt 
        case 2:
            diaSemanaTxt = 'Terça-feira';
            return diaSemanaTxt 
        case 3:
            diaSemanaTxt = 'Quarta-feira';
            return diaSemanaTxt 
        case 4:
            diaSemanaTxt = 'Quinta-feira';
            return diaSemanaTxt 
        case 5:
            diaSemanaTxt = 'Sexta-feira';
            return diaSemanaTxt 
        case 6:
            diaSemanaTxt = 'Sábado';
            return diaSemanaTxt 
        default:
            diaSemanaTxt = 'Não é um dia da semana'
            return diaSemanaTxt 
    }
}

function getNomeMes(numeroMes) {
    let nomeMes;

    switch (numeroMes) {
        case 0:
            nomeMes = 'Janeiro';
            return nomeMes;
        case 1:
            nomeMes = 'Fevereiro';
            return nomeMes;
        case 2:
            nomeMes = 'Março';
            return nomeMes;
        case 3:
            nomeMes = 'Abril';
            return nomeMes;
        case 4:
            nomeMes = 'Maio';
            return nomeMes;
        case 5:
            nomeMes = 'Junho';
            return nomeMes;
        case 6:
            nomeMes = 'Julho';
            return nomeMes;
        case 7:
            nomeMes = 'Agosto';
            return nomeMes;
        case 8:
            nomeMes = 'Setembro';
            return nomeMes;
        case 9:
            nomeMes = 'Outubro';
            return nomeMes;
        case 10:
            nomeMes = 'Novembro';
            return nomeMes;
        case 11:
            nomeMes = 'Dezembro';
            return nomeMes;
    }
}

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function criaData (data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTxt(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (`${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()},${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`);
}

h1.innerHTML = criaData(data);
