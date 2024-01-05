// switch serve para condições em que será comparada somente uma variável
// a ausencia da palavra break fará com que seja executado cada caso até a próxima palavra break, ou acabar o código
// se usado dentro de uma função pode ter o break substituido por um return
function getDiaSemanaTxt(diaSemana) {
    let diaSemanaTxt;

    switch (diaSemana) {
        case 0:
            diaSemanaTxt = 'Domingo';
            return diaSemanaTxt // return sai da função
        case 1:
            diaSemanaTxt = 'Segunda';
            return diaSemanaTxt 
        case 2:
            diaSemanaTxt = 'Terça';
            return diaSemanaTxt 
        case 3:
            diaSemanaTxt = 'Quarta';
            return diaSemanaTxt 
        case 4:
            diaSemanaTxt = 'Quinta';
            return diaSemanaTxt 
        case 5:
            diaSemanaTxt = 'Sexta';
            return diaSemanaTxt 
        case 6:
            diaSemanaTxt = 'Sábado';
            return diaSemanaTxt 
        default:
            diaSemanaTxt = 'Não é um dia da semana'
            return diaSemanaTxt 
    }
}

const data = new Date('2024-01-01 23:59:59');
let diaSemana = data.getDay();

const diaSemanaTxt = getDiaSemanaTxt(diaSemana); // essa variavel dia da semana é referente a função

console.log(diaSemana, diaSemanaTxt);