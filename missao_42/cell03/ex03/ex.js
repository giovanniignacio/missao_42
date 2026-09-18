const botao = document.getElementById('botao');   
const ftlist = document.getElementById('ft_list');

// Carrega as tarefas salvas ou cria um array vazio se não houver nenhuma
let tarefas = JSON.parse(localStorage.getItem('lista_tarefas')) || [];

// Função que renderiza uma tarefa na tela
function criarElementoTarefa(texto) {
    const div = document.createElement('div');
    div.className = 'task-item';
    div.innerHTML = `
        <span>${texto}</span>
        <button class="btn-remover">remover</button>
    `;

    // Evento para remover a tarefa
    div.querySelector('.btn-remover').addEventListener('click', () => {
        tarefas = tarefas.filter(t => t !== texto);
        localStorage.setItem('lista_tarefas', JSON.stringify(tarefas)); // Atualiza o banco
        div.remove(); // Remove da tela
    });

    return div;
}

// Evento do botão para adicionar nova tarefa
botao.addEventListener('click', () => {
    const text = prompt("Digite a nova tarefa:");
    if (!text || !text.trim()) return; // Ignora se estiver vazio

    const novaTarefa = text.trim();
    tarefas.unshift(novaTarefa); // Adiciona no início da lista
    localStorage.setItem('lista_tarefas', JSON.stringify(tarefas)); // Salva
    
    ftlist.prepend(criarElementoTarefa(novaTarefa)); // Mostra na tela
});

// Carrega as tarefas salvas assim que a página abre
tarefas.forEach(tarefa => {
    ftlist.appendChild(criarElementoTarefa(tarefa));
});
