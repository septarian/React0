// "MATH" ES UN OBJETO
console.log(Math.PI);   //Devuelve raiz cuadrada
console.log(Math.abs(-15)); //Devuelve valor absoluto
console.log(Math.round(19.5)); //Redondea los numeros con decimales
console.log(Math.floor(19.6)); //Redondea los numeros con decimales hacia abajo
console.log(Math.ceil(19.1)); //Redondea los numeros con decimales hacia arriba
console.log(Math.pow(2, 5)); //Calcula la potencia de un numero
console.log(Math.sqrt(25));  //Devuelve la raiz cuadrada

console.log(Math.random()); //Devuelve un numero pseudo aleatorio

function getRandom(min, max) {
    return Math.random() * (max - min) + min; //Devuelve un numero aleatrio que sea entre el 1 y el 10
}

console.log(getRandom(1, 10))