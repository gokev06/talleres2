// 10. Cree una función que reciba un arreglo de nombres de personas y muestre si la letra “c” se
// encuentra entre tales nombres, en caso de que la letra “c” se encuentre, mostrar las veces que se
// encuentra(considerando las apariciones entre todos los nombres) . Se le debe pedir al usuario que
// introduzca el arreglo.

 recibNomb(prompt("Ingrese un arreglo de nombres de personas"));

function recibNomb(nombre) {
    let arreglo=nombre.split(",");
    let contC=0

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i].includes("c")) {
            contC++
            
        }
    }
    console.log("la letra C se encuentra:"+contC);
}


  