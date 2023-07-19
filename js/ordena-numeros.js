const listaNum = [2, 6, 5,  9, 12, 33, 32];

function orderna(numeros) {
   return numeros.sort(function (a, b) {
    return a - b 
    //comparamos b com a, se o resultado for negativo o a vem primeiro e se for positivo o b vem primeiro, se for zero a ordem é a mesma
    //a comparação é feita para cada par dentro da array 
    
   })
}

console.log(orderna(listaNum));