// 7. Dados los arreglos arreglo1 = [“Pera”, “Cebolla”, “Limón”, “Pimentón”] arreglo2 = [“Manzana”,
// “Banano”, “Lechuga”, “Perejíl”] Ordene los arreglos de tal manera que los elementos(frutas y
// verduras) queden en el arreglo que les corresponde. Use ciclos.


const arreglo1 = ["Pera", "Cebolla", "Limón", "Pimentón"];
const arreglo2 = ["Manzana", "Banano", "Lechuga", "Perejíl"];

const frutas = [];
const verduras = [];

for (let i = 0; i < arreglo1.length; i++) {
  const elemento = arreglo1[i];

  if (elemento === "Pera" || elemento === "Limón") {
    frutas.push(elemento);
  } else {
    verduras.push(elemento);
  }
}

for (let i = 0; i < arreglo2.length; i++) {
  const elemento = arreglo2[i];

  if (elemento === "Manzana" || elemento === "Banano") {
    frutas.push(elemento);
  } else {
    verduras.push(elemento);
  }
}

console.log("Frutas:", frutas);
console.log("Verduras:", verduras);
