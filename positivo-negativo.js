function numPositivoOuNegativo (num) {
    if (num < 0) {
        return `${num} é negativo`
    } else if (num > 0){
        return `${num} é positivo`
    } else if (num === 0) {
        return `${num} é zero`
    }
}

console.log(numPositivoOuNegativo(0))