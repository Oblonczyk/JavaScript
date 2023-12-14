let numero = Number(prompt('Digite o número escolhido aqui: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
numero

numeroTitulo.innerHTML = numero;
texto.innerHTML += '<p>Raiz quadrada ' + (numero ** 0.5) + '</p>';
document.body.innerHTML += '<p>Seu número é inteiro? ' + Number.isInteger(numero) + '</p>';
document.body.innerHTML += '<p>E isso não é um número? ' + Number.isNaN(numero) + '</p>';
document.body.innerHTML += '<p>Arredondando para baixo: ' + Math.floor(numero) + '</p>';
document.body.innerHTML += '<p>Arredondando para cima: ' + Math.ceil(numero) + '</p>';
document.body.innerHTML += '<p>Com duas casas decimais: ' + numero.toFixed(2) + '</p>';
