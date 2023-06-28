// 8. Cree una función que reciba un arreglo de números enteros y retorne el número mayor en él. Se le
// debe pedir al usuario que introduzca el arreglo.



function num() {
    const entradaUsuario = prompt("Ingresa un arreglo de números separados por comas:");
    const arreglo = entradaUsuario.split(',').map(Number);

    let mayor=arreglo[0]
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i]>mayor) {
            mayor=arreglo[i]
            
        }
        
    }
    console.log(mayor);
}
num()
