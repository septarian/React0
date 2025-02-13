const saludo = "Hola Mundo!";

console.log(saludo.indexOf("Mu"));   //Obtiene el indicie de un string que se encuentre dentro de otro string
console.log(saludo.indexOf("aoeu"));   


if (saludo.indexOf("Mu") >= 0) {
    console.log("bien")
}

console.log(saludo.includes("Mundo"));   //Revisa si hay texto dentro de otro texto
let nuevoSaludo = saludo.replace("Mundo", "Erick");   //Remplaza el texto 
console.log(nuevoSaludo)
console.log(saludo.toLowerCase())   //Transforma texto a minusculas
console.log(saludo.toUpperCase())   //Transforma texto a mayusculas

console.log(saludo.substring(0,4))  //Empieza y termina el texto desde el indicie que le indiques
console.log(saludo.substr(2,4))  //Empieza el texto desde el indice que le indiques y lo termina al numero de indices que le indiques (¡DEPRECADO!)

const espacios = "  Hola    Mundo!  ";
console.log(espacios.trim())    //Quita los espacios de la izquierda y derecha (start) y (end)
console.log(espacios.trimStart()) 
console.log(espacios.trimEnd()) 