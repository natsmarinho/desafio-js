function calculaMdc(num1, num2) {
    while (num2 !== 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }

    return `O MDC é: ${num1}`;
}

console.log(calculaMdc(123, 869));