const botao = document.getElementById('botao');   
const ftlist = document.getElementById('ft_list');
const CHAVE = 'lista_tarefas';
let tarefas = [];

botao.addEventListener('click', () => {
    const text = prompt("Digite a nova tarefa:");
    if (text === null || text.trim() === "") return;
    console.log("cliquei");
});

    //função separada, fora do listener
function criardiv(texto){

    DocumentTimeline.createelement('div')
    .textcontent =texto
    .className ='task-iteam'
    return


}
ftlist.prepend(criarDiv(text));   
tarefas.unshift(text);            
console.log(tarefas);            
