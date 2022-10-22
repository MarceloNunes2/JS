/*
    For Each
*/

const students = [
    {Nome: `Lucas `, age:25},
    {Nome: `Maria `, age:67},
    {Nome: `Juliana `, age:27},
    {Nome: `Souza `, age:57},
    {Nome: `Marcelo `, age:32},
    {Nome: `Cometa`, age:2},
    {Nome: `Luna `, age:6},
    {Nome: `Meliodas `, age:5},
    {Nome: `Theo `, age:10},
    {Nome: `Steve `, age:21},

];      
    // let = allStrudetsAge = 0
students.forEach((studets,index) => {       
    
        console.log(studets)

        // {
        //  console.log(`O aluno chama-se${studets.Nome}, ele tem ${studets.age} anos, e o numero dele na chamada é ${index}`)
        // }

})

// const averengeage = allStrudetsAge / students.length
// console.log(`a Media de idade de alunos é de ${averengeage.toFixed(0)}`)