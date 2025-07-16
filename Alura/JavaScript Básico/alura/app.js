alert('Boas Vindas ao Jogo!')

let numeroSecreto  = 5
let chute


do {
    
    chute = Number(prompt('Chute um número:' ))

    alert ('Você chutou '+ chute)

    if (numeroSecreto!=chute){
    alert('Você Errou, tente novamente')
}
} while (numeroSecreto!=chute);



