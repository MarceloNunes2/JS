const alunos = [
    {nome: `Lucas`, Idade: 28, Sexo: `Masculino`, nota:10 },
    {nome: `Lucia`, Idade: 25, Sexo: `Masculino`, nota: 7},
    {nome: `Luan`, Idade: 20, Sexo: `Masculino`, nota: 4},
];

const aprovador = alunos.filter ((alunos ) =>{
    if (alunos.nota > 5){
        console.log(`Parabens ${alunos.nome} vocês foram aprovador com uma nota de ${alunos.nota}`
        )
    }else{
        console.log(`Infelizmente  ${alunos.nome} vocês foram reprovados com uma nota de ${alunos.nota}`)
    } 
})
console.log(aprovador)