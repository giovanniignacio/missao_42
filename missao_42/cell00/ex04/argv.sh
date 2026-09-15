if [ $# -eq 0 ]; then
    echo "No arguments supplied"    
    exit 1
fi
#! se o nao for 0 ele vai seguir o codigo para frente 
#! no caso ele so vai printar  

printf "%s\n" "${@:1:3}"
#! "%s\n" e para formatar o codigo  e \n e o inline oque faz pular uma linha  o ${} operaçao especial onde ele vai 
#! pega a variavel @ e ler 3 argumentos seguintes 