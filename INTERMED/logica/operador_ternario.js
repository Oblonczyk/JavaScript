const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal'; // funciona exatamente como IF, mas é denominado operador ternário

const corUsuario = null;
const corPadrao = corUsuario || 'Preta'; // checa a variavel acima e se o valor for null, retorna o segundo valor

console.log(nivelUsuario);

