
function add(x:number, y: number):number {
    return x + y
}
function subt(x:number, y: number):number {
    return x - y
}
function mult(x:number, y: number):number {
    return x * y
}

function divide(x:number, y: number):number {
    if(y === 0){
        console.log('Error: division by zero is not allowed.')
    }
    return x / y
}
let firstValue:number = parseFloat(prompt('Enter the first value:'))
let secondValue:number = parseFloat(prompt('Enter the second value:'))
let operator:string = prompt('Enter the operator:')

let result:number

if (operator === '+') {
    result = add(firstValue, secondValue);
} else if (operator === '-'){
    result = subt(firstValue, secondValue);
} else if (operator === '*') {
    result = mult(firstValue, secondValue)
} else if (operator === '/') {
    result = divide(firstValue, secondValue)
} else {
    console.log('Error: invalid operator'); 
}
alert(result);