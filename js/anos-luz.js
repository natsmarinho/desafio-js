const anoLuzConvertido = 9460528405000;

function converteAnoLuz(anoLuz) {
    const calculoAnosLuz = anoLuzConvertido * anoLuz;
    return `Cerca de ${calculoAnosLuz} anos luz`
}

console.log(converteAnoLuz(4))  