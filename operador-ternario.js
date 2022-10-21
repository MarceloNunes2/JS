/*
Operador Ternario

? se 
: se não
*/

/*
    Transferencia bancaria
*/

const saldo = true
const conta = true
const liberação = true

const transfer = saldo || conta && liberação ? 'Transferencia Realizada' : 'Transferencia Negada' 


console.log(transfer)