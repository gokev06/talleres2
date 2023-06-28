// 12. Cree una función que reciba un arreglo de cadenas de ADN (las cadenas estarán formadas por las
// letras A o C o T o G referirse a taller de ADN pasado) y muestre la cadena de ADN con mayor número
// de Timina (T). Se le debe pedir al usuario que introduzca los arreglos.


function recibirCade() {
    let cade= prompt("ingrese un arreglo de cadenas de ADN, formadas por A o C o T o G");
    let arreglos= cade.split(",");
    let mayorCant=0;
    let cadenaMay="";

    for (let i = 0; i < arreglos.length; i++) {
        let cantidadT= contarTimina(arreglos[i]);
        if (cantidadT>mayorCant) {
            mayorCant= cantidadT,
            cadenaMay=arreglos[i];   
        }
    }
    console.log("La cadena de ADN con mayor número de Timina (T) es:", cadenaMay);
}
  function contarTimina(arreglos) {
    let contadorT = 0;
  
    for (let i = 0; i < arreglos.length; i++) {
      if (arreglos[i] === "T") {
        contadorT++;
      }
    }
    return contadorT;
  }

recibirCade()  