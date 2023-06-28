// 4. Cree una función que reciba un arreglo de números naturales y muestre todos los números primos en
// él.

function primos(num) {
  if (num ===1) {
    false;
  }
  for (let i = 2; i < num.length; i++) {
     if (mum % 2 !=0) {
      return false;
     }
  }
}

function numNutu(arreglo) {
  for (let index = 0; index < arreglo.length; index++) {
    if (primos(arreglo[index])) {
      console.log(arreglo[index]);
      
    }
    
  }  
}
numNutu([1,2,23,54,67,4,23,4])

















//  function isPrime(num) {

//     if (num === 1) {
//       return false;
//     }
  
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   function numNatu(arreglo) {
//     for (let i = 0; i < arreglo.length; i++) {
//       if (isPrime(arreglo[i])) {
//         console.log(arreglo[i]);
//       }
//     }
//   }
//   numNatu([11, 19, 61, 1, 20, 50]);
  


