/*   
        MAP

    -Cria um novo array, a partir do array percorido (array orginal)
    -Cria um novo array, com a mesma quantidade  de itens do array original
    -Aceita 3 paramentros

    1 itens do array
    2 index
    3 array total
*/

const studentes = [
    {nome: `Marcelo`, age: 35},
    {nome: `Lucas`, age: 35},
    {nome: `Maria`, age: 35},
    {nome: `Cometa`, age: 35},
    {nome: `Liz`, age: 35},
    {nome: `Juliana`, age: 35},
];

const neystudentes = studentes.map((studentes) => {

    const neystudentes = {
        name: studentes.nome + `Da silva`,
        age: studentes.age + 3
    }
    return neystudentes

})

console.log(neystudentes)