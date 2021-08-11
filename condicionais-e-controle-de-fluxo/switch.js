// switch

function calculate(number1, operator, number2) {
    let result

    switch (operator) { 
        case 'sum':
            result = number1 + number2
            break
        case 'subtraction':
            result = number1 - number2
            break
        case 'multiply':
            result = number1 * number2 
            break
        case 'divided':
            result = number1 / number2
            break
        default:
            console.log('não implementado')
            break
    }

    return result
}

console.log(calculate(5, 'divided', 7))

