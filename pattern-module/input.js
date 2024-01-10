export function validateInput(input) {
    if (typeof input !== 'number') {
        throw new Error('Invalid input');
    }
}

