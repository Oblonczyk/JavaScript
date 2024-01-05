// função Date é uma função construtora (sempre é precedida por new e tem a primeira letra Maiúscula)
const data = new Date(2023, 3, 20, 15, 14, 22, 965);
                    //ANO  MES DIA HR MIN SEG MILSEG

const dataStr = new Date('2023-04-20 20:20:59');
console.log('Dia', data.getDate()); // pega o dia
console.log('Mês', data.getMonth() + 1); // pega o mes(+1 para converter para o valor que usamos no dia a dia)
console.log('Ano', data.getFullYear()); // pega o ano
console.log('Hora', data.getHours()); // pega a hora
console.log('Min', data.getMinutes()); // pega o minuto
console.log('Seg', data.getSeconds()); // pega o segundo
console.log('ms', data.getMilliseconds()); // pega o milisegundo
console.log('Dia Semana', data.getDay()); // pega o dia da semana(0-domingo | 6-sabado)

console.log(data.toString()); // exibe a data em formato gringo

console.log(Date.now()); // pega os milesimos de segundo desde o marco 0 (1970-1-1) até o momento atual

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData (data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const dataAtual = new Date();
const dataBrasil = formataData(dataAtual);
console.log(dataBrasil);
