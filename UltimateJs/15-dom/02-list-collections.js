let collection = document.getElementsByTagName('p');
let list = document.querySelectorAll('p');
console.log(collection, list);

let item1 = collection.namedItem('Johnny');
let item2 = collection.item(3);              //obtiene el elemento por su indice (en este caso es el mismo elemento con el name johnny)
let item3 = collection[3];                  //no es un array, es un objeto con las propiedades

//Iterar elementos
for (let el of collection)
    console.log(el);


Array.from(collection).forEach(x => console.log(x));
[...collection].forEach(x => console.log(x));

let item4 = list.item(3);
let item5 = list[3];

list.forEach(x => console.log(x));

let entries = list.entries();               //Devuelve Iteradores, no arrays
let keys = list.keys();                     //Devuelve las llaves (0,1,2,3)
let values = list.values();                 //Devuelve un iterador pero arroja solamente los valores que contiene la lista

[...list].forEach(el => console.log(el));