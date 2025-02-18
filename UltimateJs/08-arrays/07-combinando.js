let arr = [1,2];
let arr2 = [3,4];

let combinados = arr.concat(arr2);      //Fusiona 2 arrays
// console.log(combinados)

let divididos = combinados.slice(1,3);      //Divide arrays, El primer argumento indica en que idice empieza y el segundo en cual indice acaba
let divididos2 = combinados.slice(1);      //Divide arrays, empieza a dividir desde el indice 1 hasta el final
let divididos3 = combinados.slice();      //Hace una copia del array    (copias por referencia)

console.log(divididos)
console.log(divididos2)
console.log(divididos3)