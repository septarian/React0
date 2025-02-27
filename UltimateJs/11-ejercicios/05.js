function ordenar(texto, fn) {
    return fn(texto
        .split('')
        .sort((a,b)  => {
            if(a < b){
                return 1
            }
            if(a > b){
                return -1
            }
            return 0
        })
        .join(''))          //En este caso "fn" es literalmente como escribir "console.log"
};

ordenar('hola mundo', console.log);