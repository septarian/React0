let user = {
    id: 1,
    name: 'Erick',
    age: 25,
}

for (let prop in user) { //Itera el objeto con "FOR IN"
    console.log(prop, user[prop])
}

let animales = ['pig', 'cow', 'bird'];

for (let indice in animales) {
    console.log(indice, animales[indice])
}