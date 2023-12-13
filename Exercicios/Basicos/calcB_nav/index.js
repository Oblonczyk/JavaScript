const confirma = confirm('Olá, voce está pronto para fazer uma soma?');

if(confirma == true){
    let num1 = prompt('Certo, digite o primeiro número:');
    num1 = Number(num1);
    let num2 = prompt('Agora digite o segundo número:');
    num2 = Number(num2)

    const resultado = num1 + num2;

    alert('Ótimo, o resultado de ' + num1 + ' + ' + num2 + ' é igual a ' + resultado + '!');
} else {
    alert('Certo... Nos vemos na próxima :(');
}