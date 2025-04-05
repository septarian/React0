let validaate = data => {           //funcion donde crearemos todos los posibles errores
    let errors = {};
    if (!data.name) {               //si no tiene nada en name, saldra este error
        errors.name = 'campo obligatorio'       //se crea un objeto que vendria siendo el error que va a mostrarse
    }
    if (!data.lastname) {               
        errors.lastaname = 'campo obligatorio'
    }
}

let render = () => {
    return `
        <form name = 'formulario'>
            <div>
                <label>Nombre:</labbel>
                <input name='name' />
            </div>
            <div>
                <label>Apellido:</labbel>
                <input name='lastname' />
            </div>
            <div><button>Enviar</Button></div>
            
        </form>
    `
}

let form = document.createElement('form');
form.innerHTML = render();
document.body.append(form);

form.addEventListener('submit', e => {
    e.preventDefault();
    let data = Array.from(e.target.elements).reduce((acc, el) => {

        if (!el.name) return acc;
        acc[el.name] = el.value;
        return acc;

    }, {})

    const errors = validate(data);
    console.log(data)
})