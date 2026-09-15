#!/bin/bash
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    exit 1
fi

if [ $# -gt 3 ]; then
    
    exit 1
fi

# Imprime cada argumento em uma nova linha (\n)
printf "%s\n" "$@"