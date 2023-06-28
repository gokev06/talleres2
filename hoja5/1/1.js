/*
1. Dado el siguiente arreglo let j = [200, -100, 45, 78, 32] 
, imprimir los elementos de indice 2 y 4
*/

let j = [200, -100, 45, 78, 32]

console.log(j.splice(2,3));

/*
2. Dado el siguiente arreglo let f = ["ab", "cd", "ef", "gh"] 
, imprimir los elementos cd y gh.
*/

let f = ["ab", "cd", "ef", "gh"] 
console.log(f[1], f[3]);

/*
3. Dado el siguiente arreglo let aux = [10, true, "k200", 20.7] , 
imprimir todos sus elementos usando la operacion de recorrido con foreach
*/

let aux = [10, true, "k200", 20.7] 

aux.forEach(a =>{
    console.log(a);
})

/*
4. Dado el siguiente arreglo let k = [17, 4, 64, 79, 109, 112] , 
recorrer cada elemento con foreach e imprimir los elementos que sean números impares
*/

let k = [17, 4, 64, 79, 109, 112]
k.forEach(e =>{
    if (e%2 ==0) {
        console.log(e);
    }
})

/* 
5. Dado el siguiente arreglo let h = [true, true, false,true, false], cambiar 
el elemento de índice 2 por true, cambiar el elemento de índice 3 por false.
*/

let h = [true, true, false,true, false]
h[2]= true
h[3]= false
console.log(h);

/*
6. Dado el siguiente arreglo let w = ["wc", "jp", "zx", "qr"], cambiar el elemento 
"jp" por true, cambiar el elemento "qr" por 30
*/

let w = ["wc", "jp", "zx", "qr"]
w[1]= true
w[3]= 30
console.log(w);

/*
7. Cree una función que reciba como argumento el siguiente arreglo [2, 5, 7, 9] 
y lo recorra, imprimiendo cada uno de sus elementos.
*/

function hola(arreglo) {
    arreglo.forEach(a =>{
        console.log(a);
    })
}

hola([2, 5, 7, 9] )

/* 
8. Cree una función que reciba un arreglo de n elementos y retorne el número de 
elementos del arreglo.
*/

function kevin(n) {
    return n.length
}

let x = kevin([34 , 45 , 78 , 100]);
console.log(x);

/*
9. Use indexOf para mostrar los índices de los elementos 44, 89, 70 del arreglo 
[30, 44, 54, 89, 100]
*/

let arreglo1 = [30, 44, 54, 89, 100]
console.log(arreglo1.indexOf(44), arreglo1.indexOf(89), arreglo1.indexOf(70));

/*
Dado el arreglo [3, 50, 70, 600, 40]:
1. Use ciclo forEach para recorrer el arreglo e imprimir todos sus elementos
2. Use ciclo forEach para recorrer el arreglo e imprimir todos sus elementos 
multiplicados por 3
3. Use ciclo while para recorrer el arreglo e imprimir todos sus elementos
4. Use ciclo for, condicional y operación módulo para recorrer el arreglo y 
mostrar cuales elementos son pares
*/

//1
let arreglo2= [3, 50, 70, 600, 40]
arreglo2.forEach( z =>{
    console.log(z);
})

//2
arreglo2.forEach( z =>{
    let b = z*3
    console.log(b);
})

//3
let index=0
while (index <= arreglo2.length) {
    console.log(arreglo2[index]);
    index++
}

//4
for (let index = 0; index < arreglo2.length; index++) {
    if (arreglo2[index]%2 ==0) {
        console.log(arreglo2[index]);
    }
}


/*
5. Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana"] usar un ciclo 
y un condicional para mostrar si el nombre Juan se encuentra dentro del arreglo
*/
let arreglo3 = ["Maria", "Pedro", "Juan", "Pablo", "Diana"]

for (let index = 0; index < arreglo3.length; index++) {
    if (arreglo3[index] == "Juan") {
        console.log("la palabra juan si esta en este arreglo");
        break;
    }    
}

/*
6. Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"] usar un 
ciclo, un condicional, y una variable contador(iniciela fuera del ciclo y úsela 
para almacenar las veces que aparece Maria en el arreglo) para mostrar cuántas 
veces aparece el nombre Maria
*/

let p = ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"]

let contador=0
for (let index = 0; index < p.length; index++) {
    if (p[index] == "Maria") {
        contador++
    } 
}
console.log(contador);

/*
7. Dado el arreglo [15, 7, 9, 12, 1] usar ciclo forEach y una variable contadora 
para mostrar la suma de sus elementos.Como sugerencia, se puede basar en el ejercicio 
6 anterior de arreglos para ver como se implementa la variable contadora
*/

let arreglo4 = [15, 7, 9, 12, 1]
let contador1=0
arreglo4.forEach( l =>{
    contador1+= l
})
console.log(contador1);

/*
8. Dado el arreglo [-2, 8, 99, 1, 7] usar ciclo forEach y una variable contadora 
para mostrar la suma de los cuadrados de sus elementos.Como sugerencia, se puede 
basar en el ejercicio 6 anterior de arreglos para ver cómo se implementa la 
variable contadora
*/

let arreglo5 = [-2, 8, 99, 1, 7]
let contador2=0
arreglo5.forEach( l =>{
    contador2+= l * l
})
console.log(contador2);

/*
9. Dado el arreglo [true, true, false, true, false, false] use ciclo while y 
una variable contadora(diferente al contador del ciclo) para mostrar cuántas veces 
aparece false en el arreglo. Como sugerencia, se puede basar en el ejercicio 6 
anterior de arreglos para ver como se implementa }

la variable contadora.
*/

let arreglo6=  [true, true, false, true, false, false]
let contador3=0
let condicion=0
while (condicion <= arreglo6.length) {
    if (arreglo6[condicion] == false) {
        contador3++
    }
}
console.log(contador3);

/*
10. Dado el arreglo de caracteres: ["z", "p", "s", "z", "o", "b", "a", "w", "d"] use ciclo 
for para inspeccionar los elementos del arreglo y mostrar si con tales elementos sería 
posible formar la palabra adso.
*/

let arreglo7 = ["z", "p", "s", "z", "o", "b", "a", "w", "d"]
let a =0
let d =0
let s =0
let o =0
for (let index = 0; index < arreglo7.length; index++) {
    if (arreglo7[index] == "a") {
        a++
    }
    if (arreglo7[index] == "d") {
        d++
    }
    if (arreglo7[index] == "s") {
        s++
    }
    if (arreglo7[index] == "o") {
        o++
    }
}
if (a!=0 && d!=0 && s!=0 && o !=0) {
    console.log("si se puede crear la palabra adso");
}else{
    console.log("no se puede crear la palabra adso");
}

/*
11. Dado el arreglo [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] use ciclo 
for para mostrar la tabla del 5 del 10 al 20 , p.e (5x10, 5x11...)
*/

let arreglo8= [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for (let index = 0; index < arreglo8.length; index++) {
    let respuesta_5= arreglo8[index] * 5
    let respuesta_10= arreglo8[index]  * 10
    console.log(respuesta_5 , respuesta_10); 
}

/*
12. Dado el arreglo [5, 7, 90, 2, 5, 3, 8, 99] use dos ciclos 
forEach(una dentro del otro) para determinar cuales numeros con
consecutivos con otros, p.e. dos a y b son consecutivos si a + 1 = b, p.e. 10 y 11 
son consecutivos porque 10 + 1 = 11, 20 y 21 son consecutivos porque 20 + 1 = 21.
*/

let arreglo9= [5, 7, 90, 2, 5, 3, 8, 99]

arreglo9.forEach( index =>{
    arreglo9.forEach(i=>{
        if (index - 1 === i) {
            console.log(index, i);
        }
    })
})
