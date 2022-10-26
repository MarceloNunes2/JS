// const element = document.getElementById("main-text")

// console.log(element)

// const element = document.getElementsByClassName("paragraph")

// console.log(element)


// const element = document.getElementsByTagName("h1")

// console.log(element)


// const element = document.querySelector ("")

// console.log(element)

// const element = document.querySelectorAll('p')

// element.forEach(element =>{
//     console.log(element)
// })

// const element = document.getElementsByName("my-input")
// console.log(element)

// Event lisening

const input = document.querySelector('input')
const select = document.querySelector('select')
const button = document.querySelector('button')


const meuevento = () =>{
    alert("O botão foi apertado")
}

input.addEventListener('focus', () =>{
    console.log('Dei um foco')
})

select.addEventListener('change', () =>{
    console.log(select.value)
})

button.addEventListener('click',meuevento)