/*   
        MAP

    -Cria um novo array, a partir do array percorido (array orginal)
    -Cria um novo array, somente com os itens filtrados
    -Aceita 3 paramentros

    1 itens do array
    2 index
    3 array total
*/


const student = [
    
    {name:`Marcelo`, testGrade: 7},
    {name:`Nico`, testGrade: 10},
    {name:`Luiz`, testGrade: 9},
    {name:`Zeca`, testGrade: 2},
    {name:`Teles`, testGrade: 0},
    {name:`Kurt`, testGrade: 5},
    {name:`Nico`, testGrade: 8},
    
]


const aprovados = student.filter((aceitos)=>{
    return aceitos.testGrade >= 7
})
console.log(aprovados)