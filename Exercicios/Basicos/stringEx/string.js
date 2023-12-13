const nome = prompt('Digite seu nome completo: ');

document.body.innerHTML +=  'Seu nome é: ' + nome + '<br />';
document.body.innerHTML +=  'Seu nome tem' + nome.length + 'letras'+ '<br />';
document.body.innerHTML +=  'A segunda letra do seu nome é: ' + nome[1] + '<br />';
document.body.innerHTML +=  'O primeiro indice da letra i no seu nome? ' + nome.indexOf('i') + '<br />';
document.body.innerHTML +=  'O ultimo indice da letra i no seu nome? ' + nome.lastIndexOf('i') + '<br />';
document.body.innerHTML +=  'As ultimas 3 letras do seu nome são: ' + nome.slice(-3) + '<br />';
document.body.innerHTML +=  'As palavras do seu nome são: ' + nome.split(' ') + '<br />';
document.body.innerHTML +=  'Seu nome com letras MAIUSCULAS: ' + nome.toUpperCase() + '<br />';
document.body.innerHTML +=  'Seu nome com letras minusculas: ' + nome.toLowerCase() + '<br />';

console.log(nome);
