function numeroPrimo(num) {
    if (num <= 1) {
        return `${num} não é número primo`;
    } 
    
    for (let i; i <= Math.sqrt(num);i++) {
        if (num % 1 === 0) {
            return `${num} não é número primo`;
        }
    }

    return `${num} é número primo`;
}

console.log(numeroPrimo(1));