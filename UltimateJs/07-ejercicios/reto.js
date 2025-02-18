function palindromo(palabra){
    palabra = palabra.toLowerCase()
    palabra = palabra.replace(/ /g,"")
    let reves = []

    for(let i in palabra){
        reves[i] = palabra[i]
    }

    let reversed = []
    for(x in reves){
        reversed[x] = reves[x]
    }

    reversed.reverse()

    for(let z in reversed){
        if(reves[z] != reversed[z]){
            return false
        }
    }
    return true
}

console.log(palindromo("Anita lava la tina"))
console.log(palindromo("Hola rufian"))