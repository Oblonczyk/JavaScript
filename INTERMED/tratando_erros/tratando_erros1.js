const soma = (x, y) => {
    if (
        typeof x !== 'number' ||  typeof y !== 'number'
    ) {
        throw new ReferenceError('x e y precisam ser números.'); // ReferenceError ou Error (apenas duas de muitas opções) será retornado na execução de um erro
    }

    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch(error) {
    console.log(error); // para usuário use alguma mensagem mais amigável
}
