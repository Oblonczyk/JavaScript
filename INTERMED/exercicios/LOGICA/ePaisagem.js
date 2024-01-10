const ePaisagem = (largura, altura) => {
    const img = largura > altura;
    if (img === true) {
        return 'É paisagem';
    } else {
        return 'Não é paisagem';
    }
}

console.log(ePaisagem(1920, 1080));