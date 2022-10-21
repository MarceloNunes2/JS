

// const dados = [
//     {nome:`Marcelo`, idade: 31},
//     {nome: `Juliana`, idade: 25},
//     {nome: `Cometa`, idade:3},
// ];

// dados.forEach = ((dados,index) => {
//     {
//         console.log([dados]) 
//     }
   
// })

const nomes = [
    {nome:'Whinds',idade: 35}, 
    {nome:'Freeway',idade: 20}, 
    {nome:'Teste',idade: 19}, 
    {nome:'Maria', idade: 25}
    ];

let media = 0
nomes.forEach((nome,index) => {

    
    
    media += nome.idade
    console.log(`Os alunos ${nome.nome} estão presente. Sua  idade é ${nome.idade} e numero na chamada e ${index}`)
    for (let index = 0; index < nomes.length; index++){
        console.log(index)
    }
})  
    const idademedia = media/nomes.length

    console.log(`Media é de ${idademedia.toFixed(0)}`)