let objeto = {
    id: 1,
    name: 'johnny',
    login: function () {},
    logout: function () {},
}

function cualesMetodos(obj) {

    for (i in obj){
        if (typeof obj[i] == "function" ){
            console.log(i)
        }
    }
}
console.log(typeof objeto.login)
cualesMetodos(objeto)
 