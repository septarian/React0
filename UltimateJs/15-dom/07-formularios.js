let validate = data => {           //funcion donde crearemos todos los posibles errores
    let errors = {};
    if (!data.name) {               //si no tiene nada en name, saldra este error
        errors.name = 'campo obligatorio'       //se crea un objeto que vendria siendo el error que va a mostrarse
    }
    if (!data.lastname) {               
        errors.lastaname = 'campo obligatorio'
    }
    return errors;
}

let initialValues = {
    name: '',
    lastname: '',
}

let render = ({data, errors}) => {
    return `
        <form name = 'formulario'>
            <div>
                <label>Nombre:</labbel>
                <input name='name' value="${data.name}" />
                ${errors.name || ''}
            </div>
            <div>
                <label>Apellido:</labbel>
                <input name='lastname' value="${data.lastname}" />
                ${errors.lastname || ''}
            </div>
            <div><button>Enviar</Button></div>
            
        </form>
    `
}

let form = document.createElement('form');
form.innerHTML = render({data: initialValues, errors: {} });
document.body.append(form);

form.addEventListener('submit', e => {
    e.preventDefault();
    let data = Array.from(e.target.elements).reduce((acc, el) => {

        if (!el.name) return acc;
        acc[el.name] = el.value;
        return acc;

    }, {})

    const errors = validate(data);

    if (Object.keys(errors).lenght > 0) {            //si tiene al menos un error se va a ejecutar este codigo
        let html = render({errors, data });
        form.innerHTML = html;
        return;
    }

    //utilizar promesas o asincronia para enviar los datos al servidor
})