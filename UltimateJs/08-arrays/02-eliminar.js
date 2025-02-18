const letras = ['a','b','c','d'];

//final
const final = letras.pop();       //elimina el ultimo elemento del array y permite guardarlo en una variable
console.log(final, letras)

//comienzo
const comienzo = letras.shift();    //elimina el primer elemento del array y permite guardarlo en una variable
console.log(comienzo, letras);

//entremedio
letras.splice(1,1);
console.log(letras)