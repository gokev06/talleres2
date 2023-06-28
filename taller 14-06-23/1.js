// 1. Dado el arreglo [1,2,3,4,5,6]:
let arreglo =[1,2,3,4,5,6]
// a) Iterar por todos los elementos dentro del arreglo utilizando while y mostrarlos en pantalla.
let con=0;
while (con<arreglo.length) {
    console.log(arreglo[con]);
    con++
}

// b) Iterar por todos los elementos dentro del arreglo utilizando el ciclo “for” y mostrarlos en pantalla.

for (let i = 0; i < arreglo.length; i++) {
     console.log(i);
 }
// c) Crear una copia del arreglo usando el ciclo “for” pero con todos los elementos incrementados en 1.

 let arregloCo= [];
 for (let i = 0; i < arreglo.length; i++) {
     arregloCo.push(arreglo[i]+1)
 }
console.log(arregloCo);
// d) Calcular el promedio de todos los elementos del arreglo

 let suma=0 
 let divi=0
 for (let i = 0; i < arreglo.length; ++i) {
    
     suma+=arreglo[i]
     divi=suma/arreglo[i]
 }
 console.log(divi);