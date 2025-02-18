const letras = ['a','b'];

letras.push('c','d');           //agrega elementos al final del array
letras.unshift('y','z');        //agrega elementos al inicio del array
letras.splice(2, 0, 1, 2);      //la primer propiedad es el indicie en el que queremos inciar, 
// la segunda propiedad es cuantos elementos queremos borrar y despues son los elementos que queremos agregar

console.log(letras)