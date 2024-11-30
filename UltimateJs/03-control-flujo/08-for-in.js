const user = {
  id: 1,
  name: 'Erick',
  age: 25
}

for (const prop in user) { // Itera el objeto con "FOR IN"
  console.log(prop, user[prop])
}

const animales = ['pig', 'cow', 'bird']

for (const indice in animales) {
  console.log(indice, animales[indice])
}
