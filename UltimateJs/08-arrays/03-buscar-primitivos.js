const letras = ['a','b', 1, 'c','d', 1];

console.log(letras.indexOf('c'));        //devuelve el inidicie del elemento si esta dentro del array, si no esta devuelve un negativo
console.log(letras.indexOf(1));         //devuelve el indice del primero que encuentra
console.log(letras.lastIndexOf(1));     //Busca alreves y devuelve el indice del primero que encuentra
console.log(letras.indexOf(1,3));         //la segunda propiedad indica el indice en el que quiero empezar a buscar

console.log(letras.indexOf(1) != -1);       //devuelve true si se encuentra o false si no esta

console.log(letras.includes('d'))           //devuelve true si se encuentra o false si no esta

