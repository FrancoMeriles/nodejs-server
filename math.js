const Math  = {};

function sum (a , b) {
    return a + b;
}
function rest (a,b) {
    return a - b;
}
function div (a,b) {
    if (b == 0) {
        console.log('No se puede dividir por cero')
    }
    return a / b;
}
function mul (a,b) {
    return a * b 
}

Math.sum = sum;
Math.rest = rest;
Math.div = div;
Math.mul = mul;

module.exports = Math;