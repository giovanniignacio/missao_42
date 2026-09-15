bash#!/bin/bash

# Loop que roda para sempre até encontrar o comando 'break'
while true; do
    # Pede a entrada do usuário
    read -p "Digite os números das pastas (separados por espaço) ou 'sair': " entrada

    # Se o usuário digitar 'sair', o loop fecha
    if [ "$entrada" = "sair" ]; then
        echo "Saindo..."
        break
    fi

    # Se o usuário não digitar nada, exibe o aviso e continua o loop
    if [ -z "$entrada" ]; then
        echo "No arguments supplied"
        continue
    fi

    # Transforma a string digitada em uma lista de argumentos e cria as pastas
    for arg in $entrada; do
        mkdir "@arg ex_${00}"  
    done
done