const listaNum = [2, 5, 6, 9, 12];

function orderna(numeros) {
   return numeros.sort(function (a, b) {
    return a - b
   })
}

console.log(orderna(listaNum));