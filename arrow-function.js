// Não faz hoisting pois é declarada com const
// Arrow functions com menos de uma linha não precisam de return e nem {} 
// Se tiver apenas um parametro, não é preciso colocar entre ()

                        //paramêtro
const apresentacaoArrow = nome => `Olá ${nome}, eu so uma arrow function :)`;
console.log(apresentacaoArrow("Natali"));

                        //dois paramêtros
const somaNumerosMenores = (num1, num2) => {
    if ( num1 > 10 || num2 > 10) {
        return "Apenas números de 1 a 9";
    } else if (num1 < 0 || num2 < 0) {
        return "Apenas números positivos de 1 a 9";
    } else {
        return num1 + num2;
    }
}
console.log(somaNumerosMenores(2,6))
