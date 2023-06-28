// 6. Dado los arreglos valle = [“Cali” , “Tulua”, “Cartago”, “Salento”] quindio = [“Cordoba”,
// “Armenia”, “Palmira”, “Circasia”] Ordene los arreglos de tal manera que los elementos(ciudades)
// queden en el arreglo que les corresponde. Use ciclos.


 let arreglo1 = ["VCali" , "VTulua", "VCartago", "QSalento"] 

 let arreglo2 = ["QCordoba", "QArmenia", "VPalmira", "QCircasia"]

 const valle=[]
 const quindio=[]

 for (let index = 0; index < arreglo1.length; index++) {
     const elemento = arreglo1[index];

     if (elemento=="QSalento") {
         quindio.push(elemento)
     }else{
         valle.push(elemento)
     }
     
 }

 for (let inde = 0; inde < arreglo2.length; inde++) {
     const elemento = arreglo2[inde];

     if (elemento=="VPalmira") {
         valle.push(elemento)     
     } else {
         quindio.push(elemento)     }
     
 }
 console.log(quindio);
 console.log(valle);





















