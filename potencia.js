function calculaPotencia(base, expoente) {
    let resultado = 1;

    for (let i = 0; i < expoente; i++) {
        resultado *= base;
    }

    return resultado;
}

console.log(calculaPotencia(2,3));