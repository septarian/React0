const array = [2, 5, 7, 15, -5, -100, 55]

function cuantosPositivos (arr) {
  let positive = 0

  for (const i of array) {
    positive = i >= 0 ? positive + 1 : positive
  }
  return positive
}

const resultado = cuantosPositivos(array)
console.log(resultado)

//     if (i >= 0) {        // Esta logica tambien podria funcionar, pero opte por usar el operador ternario
//       positive++
//     }
