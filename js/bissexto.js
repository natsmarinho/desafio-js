function anoBi(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return `${ano} é um ano bissexto!`
    } else {
        return `${ano} não é um ano bissexto!`
    }
}

console.log(anoBi(2023))