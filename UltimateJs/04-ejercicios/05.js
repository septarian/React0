const array = [2, 5, 7, 15, -5, -100, 55]

function getMenorMayor (arr) {
  let menor = 0
  let mayor = 0
  // let respuesta;

  for (const i of arr) {
    menor = menor < i ? menor : i
    mayor = mayor > i ? mayor : i

    // if (menor > i) {             //Tambien funciona de esta manera
    //     menor = i;
    // }
    // if (mayor < i) {
    //     mayor = i;
    // }
    // respuesta = [menor, mayor]
  }
  return [menor, mayor]
}

const numeros = getMenorMayor(array)
console.log(numeros)

// For In regresa el indice
// For Of regresa el valor
