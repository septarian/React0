// Personaje de TV

const nombre = "Jotaro";
const anime = "Jojos";
const edad = "17";

//Objeto literal
const personaje = {
    nombre: 'Jotaro',       //Llave-Valor  / Propiedad
    anime: 'Jojos',
    edad: '17',
}; 
console.log(personaje);
console.log(personaje.nombre); // Ver solo una propiedad del objeto
console.log(personaje['anime']); // Ver solo una propiedad del objeto

personaje.edad = 18; // modifica la propiedad

const llave = 'edad';
personaje[llave] = 17 ;// modifica la propiedad

delete personaje.anime; // Elimina la propiedad del objeto

console.log(personaje)