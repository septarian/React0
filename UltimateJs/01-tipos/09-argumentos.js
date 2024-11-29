function suma(a, b) { // Parametros
    console.log(arguments); //Permite acceder a los argumentos que esta recibiendo la funcion
    return a + b;
}


const resultado = suma(2,8,5,4,3,3,3); // Argumentos
console.log(resultado);
console.log(typeof suma);