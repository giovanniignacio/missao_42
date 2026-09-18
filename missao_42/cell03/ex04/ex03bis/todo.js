    console.log("entrou no odoo")
$(function() { // <--- ISSO GARANTE QUE O HTML FOI CARREGADO ANTES DE RODAR O SCRIPT
    const $botao = $('#botao');
    const $ftlist = $('#ft_list');
    const CHAVE = 'lista_tarefas';
    let tarefas = [];

    // Salva as tarefas no navegador usando localStorage
    function salvarTarefas() {
        localStorage.setItem(CHAVE, JSON.stringify(tarefas));
    }

    // Carrega as tarefas salvas
    function carregarTarefas() {
        const dados = localStorage.getItem(CHAVE);
        return dados ? JSON.parse(dados) : [];
    }

    // Cria o elemento visual da tarefa
    function criarDiv(texto) {
        const $elemento = $('<div>', { class: 'task-item' });
        const $spanTexto = $('<span>', { text: texto });
        
        const $btnRemover = $('<button>', { text: 'remover', class: 'btn-remover' })
            .on('click', () => {
                // Remove do array
                tarefas = $.grep(tarefas, (t) => t !== texto);
                salvarTarefas();
                // Remove da tela
                $elemento.remove();
            });

        $elemento.append($spanTexto).append($btnRemover);
        return $elemento;
    }

    // Evento de clique para adicionar nova tarefa
    $botao.on('click', () => {
        const text = prompt("Adicionar tarefa:");
        if (text === null || $.trim(text) === "") return;

        const textoLimpo = $.trim(text);
        const $novaDiv = criarDiv(textoLimpo);
        
        $ftlist.prepend($novaDiv);
        tarefas.unshift(textoLimpo);
        salvarTarefas();
    });

    // Inicializa a lista com o que já estava salvo
    tarefas = carregarTarefas();
    $.each(tarefas, (index, element) => {
        const $elementoSalvo = criarDiv(element);
        $ftlist.append($elementoSalvo);
    });
});
