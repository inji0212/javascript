function validateInput(input) {
    if (typeof input !== 'number') {
        throw new Error('Invalid input');
    }
}

function sum(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

function subtract(x, y) {
    return x - y;
}

function divide(x, y) {
    return x / y;
}


