// 13. Cree una función que reciba un arreglo de números enteros no repetidos y lo retorne ordenado de
// menor a mayor según el valor de tales elementos. Se le debe pedir al usuario que introduzca el arreglo.


function numeros() {
    let num= prompt("ingrese un arreglo de numeros enteros no repetidos")
    let retornar=num.split(",").map(numero => parseInt(numero))
    retornar.sort((a, b) => a - b);
    console.log(retornar);
}
numeros()






















