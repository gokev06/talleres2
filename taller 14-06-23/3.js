// 3. Cree una función que reciba un arreglo de números y retorne el número menor entre todos los
// elementos del arreglo.



let arre= reci([33,66,77,23,45,67,11]);

function reci(arreglo) {
    
    let menor=arreglo[0]
    
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i]< menor) {
            menor=arreglo[i]
        }
    }
    console.log(menor);
}
