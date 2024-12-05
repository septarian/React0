let punto = {
    x: 10,
    y: 15,
};

Object.assign(punto,{z: 20});  //Permite asignar propiedades que estan a la derecha a objetos de la izquierda
console.log(punto)
let clonePunto = Object.assign({}, punto, {z: 20, x:1});  
console.log(clonePunto, punto)

let copiaPunto = Object.assign({}, punto)
console.log(copiaPunto)

let copia3 = {...punto };   //Las propiedades de punto se asignan a ese objeto literal, creando una copia exacta 
console.log(copia3)

let copia4 = {}
for (let llave in punto) {      //Otra forma de hacer una copia
    copia4[llave] = punto[llave]
}
console.log(copia4)