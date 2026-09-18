// Seleção dos elementos do DOM
const botao = document.getElementById('botao');   
const ftlist = document.getElementById('ft_list');
const CHAVE = 'lista_tarefas';

// Array global para armazenar as tarefas na memória  
let tarefas = [];

// Função para salvar cookies
function salvarCookies() {
    const dados = JSON.stringify(tarefas);
    const data = new Date();
    data.setTime(data.getTime() + (7 * 24 * 60 * 60 * 1000));
    // Correção: Alterado para usar crases (template literals)
    document.cookie = `${CHAVE}=${encodeURIComponent(dados)}; expires=${data.toUTCString()}; path=/`;
}

// Função para carregar cookies
function carregarCookies() {
    const nomeCookie = CHAVE + "=";
    const cookiesDecodificados = decodeURIComponent(document.cookie);
    const arrayCookies = cookiesDecodificados.split(';');
    
    for (let i = 0; i < arrayCookies.length; i++) {
        let c = arrayCookies[i].trim();
        // Correção: Verifica se o cookie atual é o da lista de tarefas
        if (c.indexOf(nomeCookie) === 0) {
            const jsonString = c.substring(nomeCookie.length);
            return JSON.parse(jsonString);
        }
    }
    return [];
}

// Função para criar a div da tarefa
function criarDiv(texto) {
    const elemento = document.createElement('div');
    elemento.className = 'task-item'; // Mantido a classe original de bloco

    // Criar o texto da tarefa
    const spanTexto = document.createElement('span');
    spanTexto.textContent = texto;
    spanTexto.className = 'text-item'; // Aplicado a classe no span de texto
    elemento.appendChild(spanTexto);

    // Criar o botão remover
    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'remover';
    btnRemover.style.marginLeft = '10px';
    
    // Evento para remover elementos
    btnRemover.addEventListener('click', () => {
        tarefas = tarefas.filter(t => t !== texto);
        salvarCookies();
        elemento.remove();
        console.log("Tarefa removida. lista atual:", tarefas);
    });

    // Correção: Mover a inserção do botão e o retorno para fora do evento de clique
    elemento.appendChild(btnRemover);
    return elemento;
}

// Botão Adicionar Tarefa
botao.addEventListener('click', () => { 
    const text = prompt("Adicionar tarefa:");
    if (text === null || text.trim() === "") return;
    
    console.log("Cliquei");
    const novaDiv = criarDiv(text.trim());
    ftlist.prepend(novaDiv);
    tarefas.unshift(text.trim());
    salvarCookies();
    console.log(tarefas); 
});

// Carregar dados iniciais dos cookies
tarefas = carregarCookies();
tarefas.forEach(element => {
    const elementoSalvos = criarDiv(element);
    ftlist.appendChild(elementoSalvos);
});
