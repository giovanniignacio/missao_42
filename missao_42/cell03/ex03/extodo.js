<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha Lista de Tarefas</title>
    <style>
        /* Redefinição básica para remover margens */
        body {
            margin: 0;
            min-width: 250px;
            font-family: Arial, Helvetica, sans-serif;
        }

        /* Estilo do cabeçalho */
        .header {
            background-color: #f44336;
            padding: 30px 40px;
            color: white;
            text-align: center;
        }

        /* Limpar floats após o cabeçalho */
        .header:after {
            content: "";
            display: table;
            clear: both;
        }

        /* Estilo do campo de entrada de texto */
        input {
            margin: 0;
            border: none;
            border-radius: 0;
            width: 75%;
            padding: 10px;
            float: left;
            font-size: 16px;
        }

        /* Estilo do botão "Adicionar" */
        .addBtn {
            padding: 10px;
            width: 20%;
            background: #d9d9d9;
            color: #555;
            float: left;
            text-align: center;
            font-size: 16px;
            cursor: pointer;
            transition: 0.3s;
            border-radius: 0;
        }

        .addBtn:hover {
            background-color: #bbb;
        }

        /* Estilo da lista */
        ul {
            margin: 0;
            padding: 0;
            list-style-type: none;
        }

        /* Estilo dos itens da lista (li) */
        ul li {
            cursor: pointer;
            position: relative;
            padding: 12px 8px 12px 40px;
            background: #eee;
            font-size: 18px;
            transition: 0.2s;
            /* Torna os itens não selecionáveis */
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        /* Cor de fundo alternada para itens ímpares */
        ul li:nth-child(odd) {
            background: #f9f9f9;
        }

        /* Efeito de hover nos itens da lista */
        ul li:hover {
            background: #ddd;
        }

        /* Estilo quando a tarefa for marcada como concluída */
        ul li.checked {
            background: #888;
            color: #fff;
            text-decoration: line-through;
        }

        /* Adiciona um checkmark (V) quando clicado */
        ul li.checked::before {
            content: '';
            position: absolute;
            border-color: #fff;
            border-style: solid;
            border-width: 0 2px 2px 0;
            top: 10px;
            left: 16px;
            transform: rotate(45deg);
            height: 15px;
            width: 7px;
        }

        /* Estilo do botão de fechar (X) */
        .close {
            position: absolute;
            right: 0;
            top: 0;
            padding: 12px 16px;
        }

        .close:hover {
            background-color: #f44336;
            color: white;
        }
    </style>
</head>
<body>

    <!-- Cabeçalho com Input e Botão -->
    <div id="myDIV" class="header">
        <h2>Minha Lista de Tarefas</h2>
        <input type="text" id="myInput" placeholder="Título da tarefa...">
        <span onclick="newElement()" class="addBtn">Adicionar</span>
    </div>

    <!-- Lista de Tarefas -->
    <ul id="myUL">
        <li>Pagar as contas</li>
        <li class="checked">Estudar JavaScript</li>
        <li>Academia</li>
    </ul>

    <script>
        // 1. Cria o botão de fechar (X) e adiciona a cada item da lista existente
        var myNodelist = document.getElementsByTagName("LI");
        for (var i = 0; i < myNodelist.length; i++) {
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7"); // Caractere de multiplicação (X)
            span.className = "close";
            span.appendChild(txt);
            myNodelist[i].appendChild(span);
        }

        // 2. Clique no botão de fechar para esconder o item atual da lista
        var close = document.getElementsByClassName("close");
        for (var i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }

        // 3. Adiciona o símbolo de "checked" (concluído) ao clicar em um item da lista
        var list = document.querySelector('ul');
        list.addEventListener('click', function(ev) {
            if (ev.target.tagName === 'LI') {
                ev.target.classList.toggle('checked');
            }
        }, false);

        // 4. Cria um novo item na lista ao clicar no botão "Adicionar"
        function newElement() {
            var li = document.createElement("li");
            var inputValue = document.getElementById("myInput").value;
            var t = document.createTextNode(inputValue);
            li.appendChild(t);
            
            if (inputValue === '') {
                alert("Você deve digitar algo!");
            } else {
                document.getElementById("myUL").appendChild(li);
            }
            document.getElementById("myInput").value = "";

            // Adiciona o botão de fechar no novo item
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            li.appendChild(span);

            // Reaplica a função de fechar para o novo item
            for (i = 0; i < close.length; i++) {
                close[i].onclick = function() {
                    var div = this.parentElement;
                    div.style.display = "none";
                }
            }
        }
    </script>

</body>
</html>
