try {
    // É executado quando não há erros
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');

    try {
        console.log(b);
    } catch {
        console.log('Deu erro.');
    } finally {
        console.log('Também sou finally');
    }
} catch (e) {
    // É executado quando há erros
    console.log('Tratando o erro');
} finally {
    // Sempre é executado
    console.log('FINALLY : Eu sempre sou executado.');
}

console.log('##############')

const retornaHora = (data) => {
    if (data && !(data instanceof Date)){
        throw new Error('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-Br', {
        hour : '2-digit',
        minute : '2-digit',
        second : '2-digit',
        hour12 : false
    })
}

try {
    const data = new Date('01-01-2000 22:56:33')
    const hora = retornaHora(data);
    console.log(hora);
} catch (e) {
    // Tratar erro
} finally {
    console.log('Tenha um bom dia!');
}
