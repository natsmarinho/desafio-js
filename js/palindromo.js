function palindromo(palavra) {
    const palavraInvertida = palavra.split('').reverse('').join('');
    
    if (palavraInvertida === palavra) {
        return `${palavra} é um palíndromo`;
    }
    
    return `${palavra} não é um palíndromo`;
}

console.log(palindromo("radar"));