/*
9. Cree una función que reciba dos arreglos de números enteros y muestre cual 
arreglo tiene un promedio mayor de sus elementos. Se le debe pedir al usuario 
que introduzca los arreglos.
*/

function nueve() {
    let cantidad1=parseInt(prompt("ingrese la canntidad del arreglo 1"))
    let cantidad2=parseInt(prompt("ingrese la cntidad del arreglo 2"))
    let arregloone=[]
    let suma1=0
    let suma2=0
    let arreglodos=[]
    for (let index = 1; index <= cantidad1; index++) {
        let arreglo1=parseInt(prompt("ingrese un numero"))
        arregloone.push(arreglo1)
        suma1+= arreglo1
    }
    for (let index = 1; index <= cantidad2; index++) {
        let arreglo2=parseInt(prompt("ingrese un numero"))
        arreglodos.push(arreglo2)
        suma2+= arreglo2
    }
    let division1= suma1/cantidad1
    let division2=suma2/cantidad2

    if (division1 > division2) {
        console.log("el arreglo numero uno tiene mejor promedio con ", division1, " : ",arregloone);
    }else{
        console.log("el arreglo numero uno tiene mejor promedio con ", division2, " : ",arreglodos);
    }
}

nueve()