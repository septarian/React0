const obj = {
    nombre: 'Johnny',
};

function extender(usuario){
    // usuario.login = () => {
    //     console.log("Iniciando sesion",usuario.nombre)
    // }
    // usuario.logout = () => {
    //     console.log("Cerrando sesion",usuario.nombre)
    // }
    const metodos = {
        login(){
            console.log("Iniciando sesion", this.nombre)
        },
        logout(){
            console.log("Cerrando sesion", this.nombre)
        },
    }
    return Object.assign(usuario, metodos)     //El objeto que pasamos como primer argumento, es el objeto al cual se le van a añadir las propiedades. Object.assign(destino, fuente)
    // Copia las propiedades de metodos dentro de usuario y devuelve el mismo objeto modificado.
}

const usuario = extender(obj);

console.log(usuario);
usuario.login();
usuario.logout();
