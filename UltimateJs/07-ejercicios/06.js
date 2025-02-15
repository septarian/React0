let obj1 = { id: 1, name: 'johnny'};

function crearCopia(obj) {
    let clon = {}

    for(let i in obj){
        clon[i] = obj[i];
    }

    return clon
}

let obj2 = crearCopia(obj1)
console.log({ obj1, obj2});
