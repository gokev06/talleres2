// 11. Cree una función que reciba un arreglo de números enteros positivos y muestre cuantos números
// impares posee el arreglo. Se le debe pedir al usuario que introduzca el arreglo.

recibiNum(prompt("ingrese un arreglo de números enteros positivos"));

function recibiNum(numero) {
    let arreglo=numero.split(",");

    for (let index = 0; index < arreglo.length; index++) {
        if (arreglo[index] % 2 !=0) {
            console.log(arreglo[index]);
        } 
    }   
}
