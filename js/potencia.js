/*function calculaPotencia(base, expoente) {
    let resultado = 1;

    for (let i = 0; i < expoente; i++) {
        resultado *= base;
    }

    return resultado;
}

console.log(calculaPotencia(2,3));*/


    const btnCalcular = document.querySelector("#calcular").addEventListener("click", calculaPotencia)
    const base = parseInt(document.querySelector("#base").value);
    const expoente = parseInt(document.querySelector("#expoente").value);

    function calculaPotencia(base, expoente) {
    let resultado = 1;

    for (let i = 0; i < expoente; i++) {
        resultado *= base;
    }
    
    const showResult = document.createElement("p");
    showResult.innerHTML = `O resultado da potência é ${resultado}`
    document.body.appendChild(showResult);
}