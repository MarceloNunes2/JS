/* 
    Function

    Montando uma Calculadora 

    soma 
    subtração
    divicão
    multiplicação
*/

const calculadora = (number1, number2,operation) =>{
    
    let  result 
    switch (operation){

        case "+":
            result =  number1 + number2
            break;

        case "-":
            result =  number1 - number2
            break;

        case "*":
            result =  number1 * number2
            break;

        case "/":
            result = number1 / number2
            break;

        default:
            result = number1 + number2
            break;
    }

    return result
}

console.log(calculadora(21,4,`/`))