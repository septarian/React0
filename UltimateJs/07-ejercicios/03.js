function similares(obj, obj2) {
    let distintos = false

    for (let i in obj) {
        if (obj[i] !== obj2[i]){
            distintos = true
        }
    }
    return !distintos
}

let resultado = similares(
    {id:1, name:'Nico'},
    {id:1, name:'Lalo'}
);

console.log(resultado)