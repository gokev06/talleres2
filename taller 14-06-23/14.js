// 14. Cree una función que reciba un arreglo de letras no repetidas y lo retorne ordenado alfabéticamente.
// Se le debe pedir al usuario que introduzca el arreglo.

function recibLetras() {
    let arreglo=prompt("ingrese un arreglo de letras no repetidas")
    let letr=arreglo.split(",")
    let ordenLetra=letr.sort();
    console.log(ordenLetra);   
}
recibLetras()


