function callback(fn, ...rest){
    fn(...rest)
}

// function log(...args){
//     console.log(args)
// }


//MUESTRA DE QUE ASI FUNCIONAN LAS FUNCIONES COMO FILTER
callback((...args) => {                 
    console.log(...args)
}, 1,2,3,4)

// [].filter(el) => {

// }