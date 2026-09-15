# Se o usuário não passar nenhum argumento ao rodar o script
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    exit 1
fi

for arg in "$@"; do
    
    mkdir "ex_$arg"
done