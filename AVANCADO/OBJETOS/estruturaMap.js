const pessoas = [
    {id : 3, nome : 'Vinycius'},
    {id : 2, nome : 'Luiz'},
    {id : 1, nome : 'Enzo'}
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map(); // assim manterá o algoritmo na ordem que foi criado
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

for (const [identifier, { id, nome }] of novasPessoas) {
    console.log(identifier, id, nome);
}
