const recursiva = (max) => { // se não definir o navegador trava
    console.log(max);
    if (max >= 10) return;
    max++;
    recursiva(max);
}

recursiva(0);

// recursividade é uma função que se chama de volta, sua unica preocupação deve ser quando parar a função
