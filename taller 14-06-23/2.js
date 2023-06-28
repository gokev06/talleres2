
/*
2. Dado el arreglo de cadenas de ADN [“AATGAAC”, “GTTTTTC”, “GGTAAA”, “CCCCATGGG”]
cree una función que reciba como argumento tal arreglo y muestre las cadenas de una 
sola base (cadenas formadas solo de A, o solo de T, o solo de C o solo de G) que se 
pueden formar entre todos los elementos del arreglo.
*/

function dos(ADN) {
    let a=0
    let t =0
    let c=0
    let g =0
    for (let i = 0; i < ADN.length; i++) {
        for (let j = 0; j < ADN[i].length; j++) {
            if (ADN[i][j] == "a" || ADN[i][j] == "A") {
                a++
            }
            if (ADN[i][j] == "t" || ADN[i][j] == "T") {
                t++
            }
            if (ADN[i][j] == "c" || ADN[i][j] == "C") {
                c++
            }
            if (ADN[i][j] == "g" || ADN[i][j] == "G") {
                g++
            }
        }
    }
    let A= "A".repeat(a)
    let T="T".repeat(t)
    let C="C".repeat(c)
    let G="G".repeat(g)
    let men=`
    ${A}\n
    ${T} \n
    ${C} \n
    ${G}\n`
    console.log(men);
} 
dos(["AATGAAC", "GTTTTTC", "GGTAAA", "CCCCATGGG"])