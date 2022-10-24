/*
    Reduce

    Retorna um novo valor {pondendo ser um array, objeto, string, number etc}
    Acumulador 
    Valor-atual
    index 
    Array-completo
*/

const list = [1,2,3,4];

const sun = list.reduce((Acumulador, valoratual)=>{
    console.log(Acumulador)
    console.log(valoratual)
    return Acumulador + valoratual
   
   
},0)

console.log(sun)