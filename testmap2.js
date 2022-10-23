
const student = [
    
    {name:`Marcelo`, testGrade: 7},
    {name:`Nico`, testGrade: 10},
    {name:`Luiz`, testGrade: 9},
    {name:`Zeca`, testGrade: 2},
    {name:`Teles`, testGrade: 0},
    {name:`Kurt`, testGrade: 5},
    {name:`Nico`, testGrade: 8},
    
]

const aprovado = student.map ((notinhas) =>{
    let aprovados
    if(notinhas.testGrade >= 7){
        aprovados = `Aprovados`
    }else{
        aprovados = `Repetindo`
    }

    const aprovado = {
        name:notinhas.name,
        Finalynotas:aprovados
        
    }
    return aprovado

})

console.log(aprovado)