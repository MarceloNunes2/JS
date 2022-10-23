

const numeros = [1,2,3,4]; 


const dobra = numero => numero * 2
const reais = numero => `R$ ${numero.toFixed(2)}`


const neyArray = numeros.map(dobra).map(reais)

console.log(neyArray)