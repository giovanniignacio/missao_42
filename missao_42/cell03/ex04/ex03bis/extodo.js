 

const listaTarefas = document.getElementById('ft_list');
const botaoAdicionarTarefa = document.getElementById('add_task_btn');


let tarefas = [];


window.onload = function() {
    carregarTarefasDosCookies();
};

botaoAdicionarTarefa.addEventListener('click', () => {
    const textoTarefa = prompt("Digite a nova tarefa:");
    
    // Requisito 5: Texto vazio ou Cancelar -> não cria nada
    if (textoTarefa === null || textoTarefa.trim() === "") {
        return; 
    }

   
    adicionarTarefa(textoTarefa);
});


function adicionarTarefa(texto, carregamentoInicial = false) {
    // Requisito 2: Cada TAREFA é uma div criada por JS
    const divTarefa = document.createElement('div');
    divTarefa.className = 'task-item';
    divTarefa.innerText = texto;

    // Requisito 6: Clicar na tarefa -> confirm() -> sai do DOM
    divTarefa.addEventListener('click', () => {
        if (confirm(`Deseja excluir a tarefa: "${texto}"?`)) {
            divTarefa.remove(); // Remove do DOM (não é display:none)
            removerTarefaDaMemoria(texto);
        }
    });

   
    listaTarefas.insertBefore(divTarefa, listaTarefas.firstChild);

   
    if (!carregamentoInicial) {
        tarefas.unshift(texto); // Nova tarefa entra no início do array (topo)
        salvarTarefasNosCookies();
    }
}


function removerTarefaDaMemoria(texto) {
    tarefas = tarefas.filter(t => t !== texto);
    salvarTarefasNosCookies();
}


function salvarTarefasNosCookies() {
    const tarefasJson = JSON.stringify(tarefas);
    // Define o cookie válido por 7 dias
    document.cookie = `lista_tarefas=${encodeURIComponent(tarefasJson)}; max-age=${7 * 24 * 60 * 60}; path=/; SameSite=Strict`;
}


function carregarTarefasDosCookies() {
    const todosCookies = document.cookie.split(';');
    // Busca pelo cookie correto limpando espaços em branco
    const cookieLista = todosCookies.find(linha => linha.trim().startsWith('lista_tarefas='));

    if (cookieLista) {
        try {
           
            const partesCookie = cookieLista.split('=');
            const valorJson = decodeURIComponent(partesCookie[1]);
            tarefas = JSON.parse(valorJson);
            
            // Para manter a ordem correta usando insertBefore(topo),
            // percorremos o array do primeiro ao último elemento guardado.
            tarefas.forEach(textoTarefa => {
                adicionarTarefa(textoTarefa, true);
            });
        } catch (erro) {
            console.error("Erro ao ler os cookies", erro);
        }
    }
}
