const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

const criaLi = () => { // Cria Li
    const li = document.createElement('li');
    return li;
};

inputTarefa.addEventListener('keypress', function (e) { // Cria a tarefa pela tecla enter
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

const limpaInput = () => { // Após enviar limpa a caixa de texto
    inputTarefa.value = '';
    inputTarefa.focus(); // Deixa o cursor piscando na caixa de textos
};

const criaBotaoApagar = (li) => { // Cria o botao apagar em frente as li
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
};

const criaTarefa = (textoInput) => { // Cria as mensagens com a tarefa digitada na caixa de texto
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    criaBotaoApagar(li);
    limpaInput();
    salvarTarefas();
};

btnTarefa.addEventListener('click', function() { // Confere se a caixa de texto não está vazia
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function (e) { // Remove o li inteiro
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

const salvarTarefas = () => { // Salvar tarefas em um arquivo JSON
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
    console.log(tarefasJSON);
}

const voltaTarefas = () => {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

voltaTarefas();
