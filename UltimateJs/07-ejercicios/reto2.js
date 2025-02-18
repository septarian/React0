function vocales(palabra){
    let vocales="aeiou"
    palabra = palabra.toLowerCase()
    let cont = 0

    for(let i of palabra){
        
        if(i === "a" || i === "e" || i === "i" || i === "o" || i === "u"){
            cont++
        }
    }
    return cont
}

console.log(vocales("Hola camarada"))
console.log(vocales("yare yare daze"))
