const punto = {
    x: 10,
    y: 15,
    dibujar() {                         //Es lo mismo que si escribieramos la palabra "function"
        console.log('dibujando');
    }
}

//delete punto.dibujar;
if ('dibujar' in punto) {       //Busca en el objeto punto si hay una propiedad llamada dibujar
    punto.dibujar();
}

//let keys = Object.keys.punto          //Es lo mismo
console.log(Object.keys(punto));        //Lista las propiedades de un objeto (MUY UTIL)
for (let llave of Object.keys(punto)) {
    console.log(llave, punto[llave]);
}

for (let entry of Object.entries(punto)) {
    console.log(entry);
}

for (let i in punto) {
    console.log(i, punto[i]);
}