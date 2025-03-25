//MAXIMO USAR UN PROTOTIPO POR FUNCION

function mixin(Ctr, ...args){               //Ctr = Constructor(pato, perro, pez o avion), Args = sus propiedades(cosas que pueden hacer en este caso)
    Object.assign(Ctr.prototype, ...args)
}

let vuela = {
    vuela() {
        console.log('volando');
    }
}
let nada = {
    nada() {
        console.log('nadando')
    }
}
let bano = {
    bano() {
        console.log('yendo al baño')
    }
}
let camina = {
    camina() {
        console.log('caminando')
    }
}

function Pato() {
    this.name = 'pato'
}
mixin(Pato, camina, nada, bano, vuela)


function Perro() {}
mixin(Perro, camina, nada, bano)


function Pez() {}
mixin(Pez, nada, bano)

function Avion() {}
mixin(Avion, vuela);


console.log(Avion.prototype, new Avion())
console.log(Pez.prototype, new Pez())
console.log(Perro.prototype, new Perro())
console.log(Pato.prototype, new Pato())