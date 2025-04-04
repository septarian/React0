let form = document.createElement('form');
form.id = 'mi-formulario';
let input = document.createElement('input');
input.setAttribute('type', 'text');
let btn = document.createElement('button');
btn.innerText = 'Enviar';
form.append(input);
form.append(btn);

document.body.append(form);

//cuando el mouse pasa por el objeto
form.onmouseenter = event => {
    console.log('entra el mouse', event)
}

//cuando el mouse se quita del objeto
form.onmouseleave = event => {
    console.log('sale el mouse');
}

//cuando se le hace clic al objeto
input.onfocus = event => {
    console.log('input con focus');
}

// cuando se haga clic a otra parte, quitando el focus
input.onblur = event => {
    console.log('input perdio el foco');
}

//cada vez que el valor que se encuentra dentro del formulario cambia
input.onchange = e => {
    console.log('valor cambia', e.target.value);
}

//Al hacer click
btn.onclick = e => {
    e.preventDefault();                     //Impide que la pagina web se refresque
    console.log('boton clickeado');
}

//Hace lo mismo que el Onclick
btn.addEventListener('click', e => {
    e.preventDefault();                     //Impide que la pagina web se refresque
    console.log('boton clickeado');
})