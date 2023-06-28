// 5. Cree una función que pida a n número de usuarios su nombre y edad y retorne un arreglo con los
// nombres de los usuarios que son mayores de edad, luego muestre cuantos usuarios hay mayores de
// edad.

//imprime cadA QUE SE NGRESA UN USUARIO
function obtenerMayoresDeEdad() {
  let cantidadUsuarios = parseInt(prompt("Ingrese el número de usuarios"));
  let usuariosMayores = [];
  let usuariosMenores =[];

  for (let i = 0; i < cantidadUsuarios; i++) {
    let nombre = prompt(`Ingrese el nombre del usuario ${i + 1}:`);
    let edad = parseInt(prompt(`Ingrese la edad del usuario ${i + 1}:`));

    if (edad >= 18) {
      usuariosMayores.push(nombre);
      console.log("Usuarios mayores de edad:", usuariosMayores);
      console.log("Cantidad de usuarios mayores de edad:", usuariosMayores.length);

    }if(edad<= 18){
      usuariosMenores.push(nombre)
      console.log("Usuarios menores de edad:", usuariosMenores );
      console.log("Cantidad de usuarios mayores de edad:", usuariosMenores.length);
    }
  }

  return ;
}

obtenerMayoresDeEdad();