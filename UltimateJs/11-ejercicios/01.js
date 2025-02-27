const obj = {
    nombre: 'Johnny',
};

function Extender(){
    this.login = () => {
        console.log("Iniciando sesion",this.nombre);       //this contiene las propiedades de obj gracias a call
    }
    this.logout = () => {
        console.log("Cerrando sesion",this.nombre);       //this contiene las propiedades de obj gracias a call
    }
}

Extender.call(obj);

console.log(obj);
obj.login();
obj.logout();