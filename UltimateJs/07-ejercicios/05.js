let objeto = {
    id: 1,
    name: false,
    login: function () {},
    logout: function () {},
}

let propiedad = 'name'

function tieneProp(obj, propiedad) {
    let props = Object.keys(obj);   //Guarda la lista de todas las propiedades que tiene el objeto


    for (i of props){
        if (propiedad == i){
            return true
        }
    }
    return false
}

// function tieneProp(obj, propiedad) {                 IGUAL FUNCIONA
//     bool = false

//     for (i in obj){
//         if (i == propiedad){
//             bool = true
//         }
//     }
//     return bool
// }

console.log(tieneProp(objeto, propiedad))
