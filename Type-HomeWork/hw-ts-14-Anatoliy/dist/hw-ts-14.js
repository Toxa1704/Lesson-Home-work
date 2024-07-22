function add(x, y) {
    return x + y;
}
function subt(x, y) {
    return x - y;
}
function mult(x, y) {
    return x * y;
}
function divide(x, y) {
    if (y === 0) {
        console.log('Error: division by zero is not allowed.');
    }
    return x / y;
}
var firstValue = parseFloat(prompt('Enter the first value:'));
var secondValue = parseFloat(prompt('Enter the second value:'));
var operator = prompt('Enter the operator:');
var result;
if (operator === '+') {
    result = add(firstValue, secondValue);
}
else if (operator === '-') {
    result = subt(firstValue, secondValue);
}
else if (operator === '*') {
    result = mult(firstValue, secondValue);
}
else if (operator === '/') {
    result = divide(firstValue, secondValue);
}
else {
    console.log('Error: invalid operator');
}
alert(result);
//# sourceMappingURL=hw-ts-14.js.map