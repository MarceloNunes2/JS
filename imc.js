const dados = {
    nome : `Marcelo`,
    peso : 70,
    heigth : 1.70
}
const res  = (dados.peso / dados.heigth)

console.log(`O Imc de ${dados.nome} é ${res.toFixed(0)}`)