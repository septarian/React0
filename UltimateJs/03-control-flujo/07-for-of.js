let animales = ['perro', 'gato', 'pollo']

for (let animal of animales) { //Recorre cada uno de los elementos del arreglo con "FOR OF"
    console.log(animal)
}

let i = 0;
while (i < animales.length) {   //Hace lo mismo que el FOR OF pero en while
    console.log(animales[i]);
    i++;
}