function precioCompleto (precio, impuesto) {
  let cargo = 0
  let resultado = 0

  // return precio + precio * impuesto     Tambien funciona esta logica

  cargo = precio * impuesto
  resultado = cargo + precio
  return resultado
}

const resultado = precioCompleto(19.90, 0.15)
console.log(resultado)
